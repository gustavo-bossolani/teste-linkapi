export default interface ICreateOrderResponseDTO {
  retorno: {
    erros?: [
      {
        erro: {
          cod: number;
          msg: string;
        };
      },
    ];
  };
}
