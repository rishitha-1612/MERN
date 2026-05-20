export interface Transaction {

  id: string;

  amount: number;

  currency: "USD" | "EUR";

  type: "deposit" | "withdraw";

  date: Date;
}