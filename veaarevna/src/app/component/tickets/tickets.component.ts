import { Component, OnInit, Input } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
import { tick } from '@angular/core/testing';
import { Product } from 'src/app/models/Products';
import { SelectedProducts } from 'src/app/models/SelectedProduct';
import { OrderService } from 'src/app/services/order.service';
import { element } from 'protractor';



@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {


  constructor(private ts: TicketsService,
     public orderService: OrderService, 
     private os:OrderService) { }

  products: Product[] = null;
  isLoading = true;


  ngOnInit() {
    console.log(this.orderService.currentPackage)
    
    this.ts.GetAllProducts().subscribe((data: Product[]) => {
      this.products = data;
      if(this.orderService.currentPackage.length==0)
      this.products.forEach(p => this.orderService.addProductToOrder(p.product_kod, 0))
      this.isLoading = false;
    })
   


    if (this.ticket > 0)
      this.check = true;
  }


  timeLeft: number = 60;
  interval;

  // startTimer() {
  //     this.interval = setInterval(() => {
  //       if(this.timeLeft > 0) {
  //         this.timeLeft--;
  //       } else {
  //         this.timeLeft = 60;
  //       }
  //     },1000)
  //   }

  //   pauseTimer() {
  //     clearInterval(this.interval);
  //   }

  save(n: number)
   {
    this.ts.specialCard = n;
    
  }



  time = new Date('2020-12-01T00:00:00');

  numof: number;
  ticket: number = this.ts.tickestNumber;
  max: number = this.ticket;
  check: boolean = false;
  sumTickets: number = 0;

  NumOfTicketsLeft(numofticketsleft: number, ticketId: number, event: number) {
    if (this.check == true) {
      this.sumTickets = 0;
      this.orderService.currentPackage.forEach(ticket => {
        if (ticketId === ticket.product_kod) {
          this.orderService.currentPackage.forEach(t => this.sumTickets += t.amount);
          if (this.sumTickets > this.max) {
            alert("חרגת ממספר הכרטיסים שניתן להוסיף!");
            ticket.amount = this.max - (+this.sumTickets - +ticket.amount);

            this.ticket = 0;
          } else {
            this.ticket = this.max - this.sumTickets;
          }
        }
      })
    }

    else {
      this.sumTickets = 0;
      this.orderService.currentPackage.forEach(ticket => {
        if (ticketId === ticket.product_kod) {
          this.orderService.currentPackage.forEach(t => this.sumTickets += t.amount);
          this.ticket = this.max - -this.sumTickets;
          this.ts.tickestNumber = this.ticket;
        }

      })
      // this.ticket +=  +this.sumTickets;
      // this.ticket++;
      
    }
  }

  SaveProducts()
  {
    this.orderService.currentPackage.forEach(element=>{if(element.product_kod==54) element.amount=this.ts.specialCard});
    let len=this.orderService.order.selectedPackeges.length;
    if(this.orderService.purchaseOption==true)
    this.orderService.order.selectedPackeges[len-1].selectedProducts= this.orderService.currentPackage;
  }

}