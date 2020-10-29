import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http:HttpClient) { }

  tickestNumber: number=0;
  
  specialCard:number=0;

  // aaa: any;

  GetAllProducts()
  {

    // this.aaa = this.http.get(environment.api+'Product/GetProductList');
    // return this.aaa;
    return this.http.get(environment.api+'Product/GetProductList');
    
  }
  
}
