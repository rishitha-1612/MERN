import React from "react";
import type { Asset } from "./types";

interface AssetCardProps {
  asset: Asset;
  onRemove: (symbol: string) => void;
}

const AssetCard: React.FC<AssetCardProps> = ({
  asset,
  onRemove
}) => {

  return (
    <div className="card">

      <h2>
        {asset.name} ({asset.symbol})
      </h2>

      <p>Value: ${asset.value}</p>

      <p>
        Change:
        {asset.change > 0 ? "+" : ""}
        {asset.change}%
      </p>

      <button
        onClick={() => onRemove(asset.symbol)}
      >
        Remove
      </button>

    </div>
  );
};

export default AssetCard;