export interface Asset {
  name: string;
  symbol: string;
  value: number;
  change: number;
}

export type AssetType =
  | "stock"
  | "bond"
  | "crypto";