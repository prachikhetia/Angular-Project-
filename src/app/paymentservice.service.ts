import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {

  constructor(private httpClient: HttpClient) { }

  public postData(data: any): Observable < any > {
    return this.httpClient.post('http://localhost:3000/postdata', data);
  }

}
