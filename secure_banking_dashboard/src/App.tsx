import { useReducer } from "react";

import "./App.css";

import TransactionForm
from "./TransactionForm";

import TransactionList
from "./TransactionList";

import {
  reducer
} from "./reducer";

const initialState = {

  balance: 1000,

  transactions: []
};

function App() {

  const [state, dispatch] =

    useReducer(
      reducer,
      initialState
    );

  const handleTransaction = (

    amount: number,

    currency: "USD" | "EUR",

    type: "deposit" | "withdraw"

  ) => {

    dispatch({

      type,

      amount,

      currency
    });
  };

  return (

    <div className="container">

      <h1>
        Secure Banking Dashboard
      </h1>

      <div className="balance">

        Current Balance:

        {" "}

        ${state.balance}

      </div>

      <TransactionForm
        onSubmit={handleTransaction}
      />

      <TransactionList
        transactions={state.transactions}
      />

    </div>
  );
}

export default App;