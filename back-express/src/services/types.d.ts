export interface IPurchaseCost {
  total: string;
  currency: string;
}

export interface IPurchaseSeller {
  id: number;
  nickname: string;
}

export interface IPurchaseDetail {
  purchase_id: number;
  title: string;
  cost: IPurchaseCost;
  amount: number;
  date: string;
  image: string;
  seller: IPurchaseSeller;
  transaction_id: number;
  shipment_id: number;
}
