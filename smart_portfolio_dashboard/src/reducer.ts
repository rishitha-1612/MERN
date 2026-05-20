import type { Asset } from "./types";

export interface PortfolioState {
  assets: Asset[];
}

export type PortfolioAction =
  | { type: "add"; asset: Asset }
  | { type: "remove"; symbol: string };

export function portfolioReducer(
  state: PortfolioState,
  action: PortfolioAction
): PortfolioState {

  switch (action.type) {

    case "add":

      return {
        ...state,
        assets: [
          ...state.assets,
          action.asset
        ]
      };

    case "remove":

      return {
        ...state,
        assets: state.assets.filter(
          asset =>
            asset.symbol !== action.symbol
        )
      };

    default:
      return state;
  }
}