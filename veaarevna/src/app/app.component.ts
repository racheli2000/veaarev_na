import { Component, OnInit } from '@angular/core';
import { Product } from './models/Products';
import { TicketsService } from './services/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private service: TicketsService,private router:Router){}

  Products:Product[];

  date:Date=new Date();

  ngOnInit()
  {
   
    // if(this.date<new Date("2020-09-21"))
    // this.router.navigate(['torem-home'])
    

    this.service.GetAllProducts().subscribe((data:Product[])=>{this.Products=data})
    console.log(this.Products)
    // if(1==1)
    // this.router.navigate(['donations'])
    
  }

  title = 'veaarevna';


}
