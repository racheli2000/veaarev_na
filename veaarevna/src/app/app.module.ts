import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PackagesComponent } from './component/packages/packages.component';
import { TicketsComponent } from './component/tickets/tickets.component';
import { PaymentComponent } from './component/payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountdownTimerModule } from 'angular-countdown-timer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseOptionComponent } from './component/purchase-option/purchase-option.component';
import { ShowGiftComponent } from './component/show-gift/show-gift.component';
import { PaypalComponent } from './component/paypal/paypal.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { ToremComponent } from './component/torem/torem.component';
import { EndComponent } from './component/end/end.component';
import { ToremHomeComponent } from './component/torem-home/torem-home.component';
import { LotteryComponent } from './component/lottery/lottery.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TicketsService } from './services/tickets.service';
import { OrderService } from './services/order.service';
import { PackagesService } from './services/packages.service';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    TicketsComponent,
    PaymentComponent,
    PurchaseOptionComponent,
    ShowGiftComponent,
    PaypalComponent,
    ToremComponent,
    EndComponent,
    ToremHomeComponent,
    LotteryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountdownTimerModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPayPalModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    
  ],

  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    TicketsService,
    PackagesService
    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
