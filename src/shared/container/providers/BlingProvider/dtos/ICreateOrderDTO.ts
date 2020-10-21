export default interface ICreateOrderDTO {
  numero: string;
  pedido: {
    data: string;
    data_saida: string;
    data_prevista: string;
    vendedor: string;
  };
  cliente: {
    nome: string;
    fone?: string;
    email?: string;
  };

  itens: [
    {
      codigo: string;
      descricao: string;
      qtd: number;
      vlr_unit: number;
    },
  ];
}
