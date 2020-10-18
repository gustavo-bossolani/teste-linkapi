interface IDataProduct {
  product_id: number;
  item_price: number;
  quantity: number;
  name: string;
}

export default interface IPipedriveProductDTO {
  success: boolean;
  data: IDataProduct[];
}
