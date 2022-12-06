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

  constructor(private marketService: MarketService) {}
}
