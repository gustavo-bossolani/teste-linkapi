export default interface IRecoveredOrderDTO {
  retorno: {
    erros?: [
      erro: {
        cod: number;
        msg: string;
      },
    ];
    pedidos?: [
      {
        pedido: {
          data: string;
          numero: string;
          totalvenda: string;
          cliente: {
            nome: string;
            fone: string;
            email: string;
            celular: string;
          };

          itens: [
            {
              item: {
                codigo: string;
                descricao: string;
                un: string;
                valorunidade: string;
              };
            },
          ];
        };
      },
    ];
  };
}
