import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelectedProducts } from '../models/SelectedProduct';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';
import { environment } from 'src/environments/environment';
import { ProductsInPackage } from '../models/ProductsInPackage';
import { TicketsService } from './tickets.service';
import { PackagesService } from './packages.service';
import { packages } from '../models/Package';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  currentPackage: SelectedProducts[] = []
  order: Order = new Order();

  constructor(private http: HttpClient, private ts: TicketsService,
    private ps: PackagesService) { }


  purchaseOption: boolean = false;

  addProductToOrder(productKod, amount) {
    this.currentPackage.push(new SelectedProducts(productKod, amount))
    // this.order.selectedPackeges[this.order.selectedPackeges.length-1].selectedProducts.push(new SelectedProducts(productKod,amount))
  }

  addPackage(p) {

    this.order.selectedPackeges.push(p)
    let len = this.order.selectedPackeges.length
    if (len > 1)
      this.order.selectedPackeges[len - 2].selectedProducts = this.currentPackage;
    this.currentPackage = [];


  }

  setPackagesForProducts(): Promise<boolean> {
    this.ps.GetAllPackagesList().subscribe((res: packages[]) => {
      debugger
      let i;
      let sortedPackages = res.sort(p => p.num_of_cards).reverse();
      let amount = this.ts.tickestNumber;
      let x = amount;
      while (amount > sortedPackages[sortedPackages.length - 1].num_of_cards) {
        for (i = 0; i < sortedPackages.length && sortedPackages[i].num_of_cards > amount; i++);
        this.order.selectedPackeges.push(new ProductsInPackage(sortedPackages[i].package_kod, sortedPackages[i].package_price));
        amount -= sortedPackages[i].num_of_cards;
        //  debugger
        let length = this.currentPackage.length;

        while (x > amount) {
          if (this.currentPackage[length - 1].amount > 0)
            this.order.selectedPackeges[this.order.selectedPackeges.length - 1].selectedProducts.push(new SelectedProducts(this.currentPackage[length - 1].product_kod, this.currentPackage[length - 1].amount))
          x -= this.currentPackage[length - 1].amount;
          // this.currentPackage.slice(this.currentPackage.length - 1, 1);
          length--;
        }
      }
    })
    console.log(this.order)
    this.http.post<boolean>(environment.api + 'Order/EndOrder', this.order);

    return new Promise((resolve) => {
      resolve(true);
    });
  }
  async endOrder() {
    if (this.purchaseOption == false)

      await this.setPackagesForProducts()

    else {
      // this.order.selectedPackeges[this.order.selectedPackeges.length-1].selectedProducts=this.currentPackage;
      for (let package1 of this.order.selectedPackeges) {
        package1.selectedProducts.forEach(function (item, index, object) {
          debugger
          if (item.amount === 0) {
            object.splice(index, 1);
          }
        });
      }
      // this.order.specialCard=this.ts.specialCard;
    }
    // return this.http.post<boolean>(environment.api + 'Order/EndOrder', this.order);

  }

  submitOrder() {
    return this.http.post<boolean>(environment.api + 'Order/EndOrder', this.order);

  }
}
