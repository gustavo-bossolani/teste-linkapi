import { inject, injectable } from 'tsyringe';

import IOrderRepository from '@modules/order/repositories/IOrderRepository';
import Order from '../infra/typeorm/schemas/Order';

import AppError from '@shared/errors/AppError';

import PipedriveProvider from '@shared/container/providers/PipedriveProvider/implementations/PipedriveProvider';
import BlingProvider from '@shared/container/providers/BlingProvider/implementations/BlingProvider';
import FormatDateProvider from '@shared/container/providers/FormatDateProvider/implementations/FormatDateProvider';

@injectable()
export default class ListOrdersService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository,

    @inject('PipedriveProvider')
    private pipeDriveProvider: PipedriveProvider,

    @inject('BlingProvider')
    private blingProvider: BlingProvider,

    @inject('FormatDateProvider')
    private formatDateProvider: FormatDateProvider,
  ) {}

  public async execute(): Promise<Order[]> {
    const deals = await this.pipeDriveProvider.getDeals();

    if (!deals.success) {
      console.log('Erro ao buscar dados do Pipedrive.');
    }

    if (deals.data && deals.success) {
      deals.data.map(async deal => {
        const products = await this.pipeDriveProvider.getProductsForADeal(
          deal.id,
        );

        /**
         * Estou partindo do principio de que não é possível
         * inserir uma ordem de negócio sem produtos.
         */
        if (products.data) {
          const itens = products.data.map(item => {
            const newItem = {
              codigo: item.product_id,
              descricao: item.name,
              qtd: item.quantity,
              vlr_unit: item.item_price,
            };
            return newItem;
          });

          // Realizando inserção de ordens no Bling
          const createdOrderResponse = await this.blingProvider.createDeal({
            pedido: {
              data: this.formatDateProvider.formatDate(
                deal.won_time.split(' ')[0],
              ),
              data_saida: this.formatDateProvider.formatDate(
                deal.close_time.split(' ')[0],
              ),
              data_prevista: this.formatDateProvider.formatDate(
                deal.expected_close_date.split(' ')[0],
              ),
              vendedor: deal.creator_user_id.name,
            },
            cliente: {
              nome: deal.person_id.name,
              email: deal.person_id?.email.find(email => email.primary)?.value,
              fone: deal.person_id?.phone.find(phone => phone.primary)?.value,
            },
            itens,
          });

          if (createdOrderResponse.retorno.erros) {
            const { erro } = createdOrderResponse.retorno.erros[0];
            console.log(`Bling Error POST: ${erro.msg} - cod: ${erro.cod}`);
          }
        }
      });
    }

    const blingOrderList = await this.blingProvider.getDeals();

    const { erros, pedidos } = blingOrderList.retorno;

    if (erros) {
      const { cod, msg } = erros[0];
      console.log(`Bling Error GET: ${msg} - cod: ${cod}`);
    }

    if (pedidos) {
      pedidos.map(async returnedPedidoItem => {
        // Realizando criação do pedido no banco
        const {
          data,
          numero,
          totalvenda,
          cliente,
          itens: orderItens,
        } = returnedPedidoItem.pedido;

        const hasUpdated = await this.orderRepository.updateIfExists(numero);

        if (!hasUpdated) {
          await this.orderRepository.create({
            data,
            totalVenda: totalvenda,
            numeroPedido: numero,
            cliente: {
              email: cliente.email,
              fone: cliente.fone,
              nome: cliente.nome,
            },
            itens: orderItens.map(returnItem => {
              const { codigo, descricao, un, valorunidade } = returnItem.item;

              return {
                codigo,
                descricao,
                quantidade: un,
                valorUnidade: valorunidade,
              };
            }),
          });
        }
      });
    }

    const orders = await this.orderRepository.findAll();

    return orders;
  }
}
