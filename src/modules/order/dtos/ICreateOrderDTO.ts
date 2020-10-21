export default interface ICreateOrderDTO {
  numeroPedido: string;
  data: string;
  totalVenda: string;

  cliente: {
    nome: string;
    email: string;
    fone: string;
  };
  itens: [
    {
      codigo: string;
      descricao: string;
      quantidade: string;
      valorUnidade: string;
    },
  ];
}
