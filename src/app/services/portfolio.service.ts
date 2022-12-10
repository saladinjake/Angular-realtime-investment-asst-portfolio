import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PortfolioAsset } from '../models/asset.model';
import { MarketService } from './market.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private initialHoldings: { symbol: string, quantity: number, avgPurchasePrice: number }[] = [
    { symbol: 'AAPL', quantity: 10, avgPurchasePrice: 145 },
    { symbol: 'BTC', quantity: 0.5, avgPurchasePrice: 18000 }
  ];

  private holdingsSubject = new BehaviorSubject(this.initialHoldings);

  public portfolio$: Observable<PortfolioAsset[]> = combineLatest([
    this.holdingsSubject,
    this.marketService.marketData$
  ]).pipe(
    map(([holdings, marketAssets]) => {
      return holdings.map(h => {
        const marketAsset = marketAssets.find(a => a.symbol === h.symbol)!;
        return {
          ...marketAsset,
          quantity: h.quantity,
          avgPurchasePrice: h.avgPurchasePrice
        };
      });
    })
  );

  constructor(private marketService: MarketService) { }

  buyAsset(symbol: string, quantity: number, price: number) {
    const current = this.holdingsSubject.value;
    const existing = current.find(h => h.symbol === symbol);

    if (existing) {
      const newQuantity = existing.quantity + quantity;
      const newAvgPrice = (existing.quantity * existing.avgPurchasePrice + quantity * price) / newQuantity;
      const updated = current.map(h => h.symbol === symbol ? { ...h, quantity: newQuantity, avgPurchasePrice: newAvgPrice } : h);
      this.holdingsSubject.next(updated);
    } else {
      this.holdingsSubject.next([...current, { symbol, quantity, avgPurchasePrice: price }]);
    }
  }
}

