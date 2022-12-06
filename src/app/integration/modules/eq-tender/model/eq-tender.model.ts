export interface TenderItem {
  id: number;
  name: string;
  amount: number;
}

export interface EqTender {
  id: number;
  title: string;
  expiresOn: Date | null;
  description: string;
  state: number;
  requirements: TenderItem[];
}