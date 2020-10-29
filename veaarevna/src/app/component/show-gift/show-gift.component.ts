import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { TicketsService } from 'src/app/services/tickets.service';
import { Product } from 'src/app/models/Products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-gift',
  templateUrl: './show-gift.component.html',
  styleUrls: ['./show-gift.component.css']
})
export class ShowGiftComponent implements OnInit {


  constructor(private ts: TicketsService,
    private activatedRoute: ActivatedRoute,) { }

  products: Product[] = null;


  ngOnInit() {
    this.product_code = +this.activatedRoute.snapshot.paramMap.get('product_kod');
    this.ts.GetAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    })
  }

  product_code: number;

  check(s:string)
  {
    console.log(s);
  }


}
