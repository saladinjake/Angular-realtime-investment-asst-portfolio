export interface Asset {
  symbol: string;
  name: string;
  currentPrice: number;
  change24h: number;
  type: 'stock' | 'crypto';
  history: number[];
}

export interface PortfolioAsset extends Asset {
  quantity: number;
  avgPurchasePrice: number;
}
