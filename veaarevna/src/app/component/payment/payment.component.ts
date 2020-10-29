import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { TicketsService } from 'src/app/services/tickets.service';
import { PackagesService } from 'src/app/services/packages.service';
import { Order } from 'src/app/models/Order';
import { SelectedProducts } from 'src/app/models/SelectedProduct';
import { ProductsInPackage } from 'src/app/models/ProductsInPackage';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public orderService: OrderService, private ts: TicketsService, private router: Router
    // private orderPackges:Order 
  ) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required, Validators.nullValidator]);
  lastname = new FormControl('', [Validators.required, Validators.nullValidator]);
  phone = new FormControl('', [Validators.required, Validators.nullValidator]);
  id = new FormControl('', [Validators.required, Validators.nullValidator]);


  getErrorMessage(x: number) {
    if (this.email.hasError('required')) {
      return 'שדה חובה!';
    }
    if (this.firstname.hasError('required')) {
      return 'שדה חובה!';
    }
    if (this.lastname.hasError('required')) {
      return 'שדה חובה!';
    }
    if (this.phone.hasError('required')) {
      return 'שדה חובה!';
    }
    if (this.id.hasError('required')) {
      return 'שדה חובה!';
    }

    if (x == 1)
      return this.email.hasError('email') ? 'כתובת מייל לא תקינה!' : '';
    else
      return '';
  }


  ticket: number = this.ts.tickestNumber;
  amount: number = this.ts.tickestNumber;
  flag: number = 0;
  f300: number = 0
  f100: number = 0
  f30: number = 0
  f10: number = 0
  f3: number = 0;
  sum: number = 0;

  x: number;

  str:string=' '

  ngOnInit() {

    if (this.orderService.purchaseOption == true) {
      this.orderService.order.selectedPackeges.forEach(element => {
        this.sum += element.package_price + this.ts.specialCard * 45;
      });
      if (this.ts.tickestNumber == 300 || this.ts.tickestNumber == 100 || this.ts.tickestNumber == 30)
        this.ts.specialCard++;
    }

    else {
      while (this.amount >= 3) {
        this.flag = 0;
        this.x = this.amount;
        if (this.amount >= 300 && this.flag == 0) {
          this.f300++;
          this.amount -= 300;
          this.flag = 1;

        }
        if (this.amount >= 100 && this.flag == 0) {
          this.f100++;
          this.amount -= 100;
          this.flag = 1;

        }

        if (this.amount >= 30 && this.flag == 0) {
          this.f30++;
          this.amount -= 30;
          this.flag = 1;

        }


        if (this.amount >= 10 && this.flag == 0) {
          this.f10++;
          this.amount -= 10;
          this.flag = 1;
        }

        if (this.amount >= 3 && this.flag == 0) {
          this.f3++;
          this.amount -= 3;
          this.flag = 1;
        }

        this.sum = this.f300 * 1980 + this.f100 * 990 + this.f30 * 360 + this.f10 * 168 + this.f3 * 84 + this.amount * 39 + this.ts.specialCard * 45;
      }
    }
  }
  
  async endOrder() {
    // this.orderService.currentPackage.push(new SelectedProducts(54, this.ts.specialCard));
    // צריך פה להוסיף שיעבור ניתוב - איפה מה שעשינו פעם שעברה

    console.log("try");
    if(this.orderService.order.user.user_firsname!=null&&this.orderService.order.user.user_lastname!=null&&this.orderService.order.user.user_id!=null&&this.orderService.order.user.user_phone!=null&&this.orderService.order.user.user_email!=null)
   {
    if(this.orderService.order.user.user_firsname!=''&&this.orderService.order.user.user_lastname!=''&&this.orderService.order.user.user_id!=''&&this.orderService.order.user.user_phone!=''&&this.orderService.order.user.user_email!='')
    
    {

   await this.orderService.endOrder();
   this.orderService.submitOrder().subscribe();
    this.router.navigate(['end'])
   }}
    else
    this.getErrorMessage(0);
    console.log("aaa")
  }

  change() {
    this.orderService.purchaseOption = true;
    // this.orderService.currentPackage.push(new SelectedProducts(54, this.ts.specialCard));
    // this.ts.specialCard=0;
  }

}
