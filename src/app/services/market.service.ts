import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Asset } from '../models/asset.model';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  private initialAssets: Asset[] = [
    { symbol: 'AAPL', name: 'Apple Inc.', currentPrice: 150.25, change24h: 1.2, type: 'stock', history: [148, 149, 150.25] },
    { symbol: 'TSLA', name: 'Tesla, Inc.', currentPrice: 680.40, change24h: -2.5, type: 'stock', history: [700, 690, 680.40] },
    { symbol: 'BTC', name: 'Bitcoin', currentPrice: 19500, change24h: 3.8, type: 'crypto', history: [18000, 19000, 19500] },
    { symbol: 'ETH', name: 'Ethereum', currentPrice: 1350.10, change24h: 0.5, type: 'crypto', history: [1300, 1340, 1350.10] }
  ];

  private marketSubject = new BehaviorSubject<Asset[]>(this.initialAssets);
  public marketData$ = this.marketSubject.asObservable().pipe(shareReplay(1));

  constructor() {}
}
