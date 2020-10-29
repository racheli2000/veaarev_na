import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationsComponent } from './donations.component';
import { AddDonationComponent } from './components/add-donation/add-donation.component';

const routes: Routes = [{ path: 'don', component: DonationsComponent },
{path:'', component:AddDonationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationsRoutingModule { }
