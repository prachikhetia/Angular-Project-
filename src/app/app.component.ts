import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {CardPayment} from './../app/models/cardpayment.model';
import {AppState} from './../app/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  cardpayments : Observable<CardPayment[]>;

  constructor(private store : Store<AppState>){
    this.cardpayments = store.select('cardpayment');
  }

  isClicked = true;
  title = 'test';
  toggle(){
    if(this.isClicked){
      this.isClicked = false;
    }
    else{
      this.isClicked = true;
    }
  }
}
