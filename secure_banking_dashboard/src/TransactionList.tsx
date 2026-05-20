import type { Transaction } from "./types";

interface TransactionListProps {

  transactions: Transaction[];
}

const TransactionList = ({
  transactions
}: TransactionListProps) => {

  return (

    <div className="list">

      <h2>
        Transaction History
      </h2>

      {transactions.length === 0 && (
        <p>No transactions yet.</p>
      )}

      {transactions.map(tx => (

        <div
          key={tx.id}
          className="transaction"
        >

          <h3>
            {tx.type.toUpperCase()}
          </h3>

          <p>
            Amount:
            {" "}
            {tx.amount}
            {" "}
            {tx.currency}
          </p>

          <p>
            Date:
            {" "}
            {tx.date.toLocaleString()}
          </p>

        </div>

      ))}

    </div>
  );
};

export default TransactionList;