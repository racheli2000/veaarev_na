import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductsInPackage } from 'src/app/models/ProductsInPackage';

@Component({
  selector: 'app-purchase-option',
  templateUrl: './purchase-option.component.html',
  styleUrls: ['./purchase-option.component.css']
})
export class PurchaseOptionComponent implements OnInit {

  constructor(private os:OrderService) { }

  ngOnInit() {
  }

  choosen(c:boolean)
  {
    this.os.purchaseOption=true;
  }

  addPackage()
  {

    
      // this.os.addPackage(new ProductsInPackage(1,39));
  
  }

}
