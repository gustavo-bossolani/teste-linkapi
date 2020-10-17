interface IDataDeal {
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
  won_time: string;
  products_count: number;
  expected_close_date: string;
  formatted_value: string;
}

export default interface IPipedriveDealsDTO {
  success: boolean;
  data: IDataDeal[];
}
