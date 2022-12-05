import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, LayoutDashboard, TrendingUp, TrendingDown, Wallet, Activity, PieChart, Plus, Trash2 } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({ LayoutDashboard, TrendingUp, TrendingDown, Wallet, Activity, PieChart, Plus, Trash2 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
