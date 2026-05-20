import React, { useReducer } from "react";

import AssetList from "./AssetList";
import AssetForm from "./AssetForm";
import PortfolioSummary from "./PortfolioSummary";

import {
  portfolioReducer
} from "./reducer";

const initialState = {
  assets: [
    {
      name: "Apple",
      symbol: "AAPL",
      value: 200,
      change: 5
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      value: 60000,
      change: -2
    }
  ]
};

function App() {

  const [state, dispatch] =
    useReducer(
      portfolioReducer,
      initialState
    );

  const addAsset = (asset: any) => {

    dispatch({
      type: "add",
      asset
    });
  };

  const removeAsset = (
    symbol: string
  ) => {

    dispatch({
      type: "remove",
      symbol
    });
  };

  return (

    <div className="container">

      <h1>
        Smart Portfolio Dashboard
      </h1>

      <PortfolioSummary
        assets={state.assets}
      />

      <AssetForm
        onAdd={addAsset}
      />

      <AssetList
        assets={state.assets}
        onRemove={removeAsset}
      />

    </div>
  );
}

export default App;