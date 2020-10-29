import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PackagesComponent } from './component/packages/packages.component';
import { TicketsComponent } from './component/tickets/tickets.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PurchaseOptionComponent } from './component/purchase-option/purchase-option.component';
import { ShowGiftComponent } from './component/show-gift/show-gift.component';
import { PaypalComponent } from './component/paypal/paypal.component';
import { ToremComponent } from './component/torem/torem.component';
import { EndComponent } from './component/end/end.component';
import { ToremHomeComponent } from './component/torem-home/torem-home.component';
import { LotteryService } from './services/lottery.service';
import { LotteryComponent } from './component/lottery/lottery.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'packages',component:PackagesComponent},
  {path:'tickets',component:TicketsComponent},
  {path:'payment',component:PaymentComponent},
  {path:'purchase-option',component:PurchaseOptionComponent},
  {path: 'show-gift/:product_kod',component:ShowGiftComponent},
  {path: 'paypal',component:PaypalComponent},
  {path: 'torem',component:ToremComponent},
  {path: 'end',component:EndComponent},
  {path: 'torem-home',component:ToremHomeComponent},
  { path: 'donations', loadChildren: () => import('./donations/donations.module').then(m => m.DonationsModule) },
  {path:'lottery', component:LotteryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
