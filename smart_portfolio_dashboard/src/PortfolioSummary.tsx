import React from "react";
import type { Asset } from "./types";

interface PortfolioSummaryProps {
  assets: Asset[];
}

const PortfolioSummary: React.FC<
  PortfolioSummaryProps
> = ({ assets }) => {

  const totalValue =
    assets.reduce(
      (sum, asset) => sum + asset.value,
      0
    );

  const averageChange =
    assets.length > 0
      ? assets.reduce(
          (sum, asset) => sum + asset.change,
          0
        ) / assets.length
      : 0;

  return (

    <div className="summary">

      <h2>Portfolio Summary</h2>

      <p>
        Total Value:
        ${totalValue}
      </p>

      <p>
        Average Change:
        {averageChange.toFixed(2)}%
      </p>

    </div>
  );
};

export default PortfolioSummary;