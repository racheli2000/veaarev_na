import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {

  constructor(private http:HttpClient) { }

  GetAllWinners()
  {

    return this.http.get(environment.api+'lottery/getAllWinners');
    
  }

}
