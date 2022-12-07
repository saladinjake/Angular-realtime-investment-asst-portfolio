import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../services/market.service';
import { PortfolioService } from '../../services/portfolio.service';
import { Observable } from 'rxjs';
import { Asset, PortfolioAsset } from '../../models/asset.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  marketData$: Observable<Asset[]>;
  portfolio$: Observable<PortfolioAsset[]>;

  constructor(
    private marketService: MarketService,
    private portfolioService: PortfolioService
  ) {
    this.marketData$ = this.marketService.marketData$;
    this.portfolio$ = this.portfolioService.portfolio$;
  }

  ngOnInit(): void {}
}
