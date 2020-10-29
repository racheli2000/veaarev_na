import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { Torem } from 'src/app/models/Torem';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-torem',
  templateUrl: './torem.component.html',
  styleUrls: ['./torem.component.css']
})
export class ToremComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }


  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, Validators.nullValidator]);
  adrress = new FormControl('', [Validators.required, Validators.nullValidator]);
  phone = new FormControl('', [Validators.required, Validators.nullValidator]);
  pname = new FormControl('', [Validators.required, Validators.nullValidator]);
  description = new FormControl('', [Validators.required, Validators.nullValidator]);

  str:string="try";

  getErrorMessage(x: number) {
    if (this.email.hasError('required')) {
      return 'שדה חובה!';
    }
    if (this.name.hasError('required')) {
      return 'שדה חובה!';
    }
    if (this.adrress.hasError('required')) {
      return 'שדה חובה!';
    }
    if (this.pname.hasError('required')) {
      return 'שדה חובה!';
    }
    if (this.description.hasError('required')) {
      return 'שדה חובה!';
    }
    if (this.phone.hasError('required')) {
      return 'שדה חובה!';
    }

    if (x == 1)
      return this.email.hasError('email') ? 'כתובת מייל לא תקינה!' : '';
    else
      return '';
  }


  product: Product = new Product();
  torem: Torem = new Torem();

  save(imageInput) {

    if(this.torem.Business_name!=null&&this.torem.torem_address!=null&&this.torem.torem_email!=null&&this.torem.torem_phone!=null
      &&this.product.description!=null&&this.product.product_name!=null&&this.product.prouduct_picture!=null)
{
  if(this.torem.torem_phone!=''&&this.torem.torem_email!=''&&this.torem.torem_address!=''&&this.torem.Business_name!=''
  &&this.product.product_name!=''&&this.product.description!=''&&this.product.prouduct_picture!='')
  {
    console.log("try")
    let data = new FormData();
    data.append('torem', JSON.stringify(this.torem))
    data.append('product', JSON.stringify(this.product))
    data.append('image', imageInput.files[0])


    console.log(imageInput.files[0]);
if(imageInput!=null)
    this.http.post<boolean>(environment.api + 'torem/AddTorem', data).subscribe()

    // .subscribe(res => {
    //   if (res)
    //     this.router.navigate(["end"])
    //   else alert("cghv canhr, b,ubho")
    // });
}}
    //  this.http.post<boolean>(environment.api+'product/AddProduct',this.product);  
// if(this.product.prouduct_picture==null||this.product.prouduct_picture=='')

  }



}
