interface IDataDeal {
  id: number;
  creator_user_id: {
    name: string;
    email: string;
  };
  person_id: {
    name: string;
    email: [
      {
        label: string;
        value: string;
        primary: boolean;
      },
    ];
    phone: [
      {
        label: string;
        value: string;
        primary: boolean;
      },
    ];
  };
  org_id?: {
    name: string;
    people_count: number;
    address: string;
    cc_email: string;
  };
  title: string;
  value: number;
  currency: string;
  status: string;
  products_count: number;
  formatted_value: string;
  won_time: string;
  close_time: string;
  expected_close_date: string;
}

export default interface IPipedriveDealsDTO {
  success: boolean;
  data: IDataDeal[];
}
