import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationsRoutingModule } from './donations-routing.module';
import { DonationsComponent } from './donations.component';
import { AddDonationComponent } from './components/add-donation/add-donation.component';


@NgModule({
  declarations: [DonationsComponent, AddDonationComponent],
  imports: [
    CommonModule,
    DonationsRoutingModule
  ]
})
export class DonationsModule { }
