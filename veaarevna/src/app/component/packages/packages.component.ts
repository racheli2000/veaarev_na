import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
import { packages } from 'src/app/models/Package';
import { PackagesService } from 'src/app/services/packages.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductsInPackage } from 'src/app/models/ProductsInPackage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(private ticketsService: TicketsService,
    private packagesService:PackagesService,
    private orderService:OrderService,
    private router:Router) { }

  AllPackages:packages[];
  singleTicketPackage=new packages();

  ngOnInit()
  {
    this.packagesService.GetAllPackagesList().subscribe((data:packages[])=>{this.AllPackages=data;
    this.singleTicketPackage=this.AllPackages.find(p=>p.num_of_cards==1);
    })
  }

ticket:number=0;

  package(p:packages)
  {
    
      this.ticket=p.num_of_cards;
      this.ticketsService.tickestNumber = p.num_of_cards;
      this.orderService.addPackage(new ProductsInPackage(p.package_kod,p.package_price))
      this.router.navigate(['tickets'])
  }

  singleTickets(numOfTickets)
  {
    this.ticket=numOfTickets;
    this.ticketsService.tickestNumber = numOfTickets;
    
    this.orderService.addPackage(new ProductsInPackage(this.singleTicketPackage.package_kod,numOfTickets*this.singleTicketPackage.package_price))
     this.router.navigate(['tickets'])

  }

  

  check()
  {
    console.log(this.AllPackages);
    console.log(this.ticket)
  }

}
