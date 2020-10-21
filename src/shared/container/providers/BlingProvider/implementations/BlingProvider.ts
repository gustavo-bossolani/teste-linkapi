import api from '../config/axios';

import IBlingProvider from '../models/IBlingProvider';
import ICreateOrderDTO from '../dtos/ICreateOrderDTO';
import IRecoveredOrderResponseDTO from '../dtos/IRecoveredOrderResponseDTO';
import ICreateOrderResponseDTO from '../dtos/ICreateOrderResponseDTO';

export default class BlingProvider implements IBlingProvider {
  public async createDeal({
    pedido,
    cliente,
    itens,
  }: ICreateOrderDTO): Promise<ICreateOrderResponseDTO> {
    const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <pedido>
      <data>${pedido.data}</data>
      <data_saida>${pedido?.data_saida}</data_saida>
      <data_prevista>${pedido?.data_prevista}</data_prevista>
      <vendedor>${pedido.vendedor}</vendedor>
      <cliente>
        <nome>${cliente.nome}</nome>
        <email>${cliente?.email}</email>
        <fone>${cliente?.fone}</fone>
      </cliente>
      <itens>
      ${itens.map(item => {
        return `
        <item>
          <codigo>${item.codigo}</codigo>
          <descricao>${item.descricao}</descricao>
          <qtde>${item.qtd}</qtde>
          <vlr_unit>${item.vlr_unit}</vlr_unit>
        </item>
        `;
      })}
      </itens>
    </pedido>
    `;

    xml.trim().replace(',', '');

    const response = await api.post<ICreateOrderResponseDTO>(
      'pedido/json/',
      null,
      {
        params: {
          apikey: '',
          xml,
        },
      },
    );

    return response.data;
  }

  public async getDeals(): Promise<IRecoveredOrderResponseDTO> {
    const response = await api.get<IRecoveredOrderResponseDTO>(
      'pedidos/json/',
      {
        params: {
          apikey: '',
        },
      },
    );

    return response.data;
  }
}
