import React from "react";

interface TransactionFormProps {

  onSubmit: (
    amount: number,
    currency: "USD" | "EUR",
    type: "deposit" | "withdraw"
  ) => void;
}

interface TransactionFormState {

  amount: string;

  currency: "USD" | "EUR";

  type: "deposit" | "withdraw";
}

class TransactionForm extends React.Component<

  TransactionFormProps,

  TransactionFormState

> {

  state: TransactionFormState = {

    amount: "",

    currency: "USD",

    type: "deposit"
  };

  handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    this.props.onSubmit(

      Number(this.state.amount),

      this.state.currency,

      this.state.type
    );

    this.setState({

      amount: "",

      currency: "USD",

      type: "deposit"
    });
  };

  render() {

    return (

      <form
        onSubmit={this.handleSubmit}
        className="form"
      >

        <input

          type="number"

          placeholder="Amount"

          value={this.state.amount}

          onChange={e =>
            this.setState({
              amount: e.target.value
            })
          }
        />

        <select

          value={this.state.currency}

          onChange={e =>
            this.setState({
              currency:
                e.target.value as
                "USD" | "EUR"
            })
          }
        >

          <option value="USD">
            USD
          </option>

          <option value="EUR">
            EUR
          </option>

        </select>

        <select

          value={this.state.type}

          onChange={e =>
            this.setState({
              type:
                e.target.value as
                "deposit" | "withdraw"
            })
          }
        >

          <option value="deposit">
            Deposit
          </option>

          <option value="withdraw">
            Withdraw
          </option>

        </select>

        <button type="submit">

          Submit

        </button>

      </form>
    );
  }
}

export default TransactionForm;