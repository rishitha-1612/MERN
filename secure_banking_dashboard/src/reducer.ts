import type { Transaction } from "./types";

export interface TransactionState {

  balance: number;

  transactions: Transaction[];
}

export type TransactionAction =

  | {
      type: "deposit";
      amount: number;
      currency: "USD" | "EUR";
    }

  | {
      type: "withdraw";
      amount: number;
      currency: "USD" | "EUR";
    };

export function reducer(

  state: TransactionState,

  action: TransactionAction

): TransactionState {

  switch (action.type) {

    case "deposit":

      return {

        ...state,

        balance:
          state.balance + action.amount,

        transactions: [

          ...state.transactions,

          {
            id: crypto.randomUUID(),

            amount: action.amount,

            currency: action.currency,

            type: "deposit",

            date: new Date()
          }
        ]
      };

    case "withdraw":

      if (
        action.amount > state.balance
      ) {

        alert(
          "Insufficient balance"
        );

        return state;
      }

      return {

        ...state,

        balance:
          state.balance - action.amount,

        transactions: [

          ...state.transactions,

          {
            id: crypto.randomUUID(),

            amount: action.amount,

            currency: action.currency,

            type: "withdraw",

            date: new Date()
          }
        ]
      };

    default:

      return state;
  }
}