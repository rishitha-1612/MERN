import React from "react";
import AssetCard from "./AssetCard";
import type { Asset } from "./types";

interface AssetListProps {
  assets: Asset[];
  onRemove: (symbol: string) => void;
}

const AssetList: React.FC<AssetListProps> = ({
  assets,
  onRemove
}) => {

  return (
    <div>

      {assets.map(asset => (
        <AssetCard
          key={asset.symbol}
          asset={asset}
          onRemove={onRemove}
        />
      ))}

    </div>
  );
};

export default AssetList;