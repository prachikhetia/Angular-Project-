import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,FormArray,Validator, Validators, } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { CardPayment } from './../models/cardpayment.model'
import * as CardPaymentActions from './../actions/cardpayment.action';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import {PaymentserviceService} from './../paymentservice.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  frmval:FormGroup;
  submited = false;
  expError = false;
  positiveamount = false;
  
  constructor(private fb:FormBuilder, private store: Store<AppState>,private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, private service: PaymentserviceService,private toastr: ToastrService) {
    this.frmval  = this.fb.group({
      creditCardNumber  : ['',[Validators.required]],
      cardHolder : ['',Validators.required],
      expirationDate :['',[Validators.required]],
      securityCode: ['',[]],
      amount: ['', Validators.required],
    
  }
 )
   }

  

  ngOnInit(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
   
  }

  addCardPayment(creditCardNumber, cardHolder, expirationDate, securityCode, amount)
  {
    console.log(this.frmval?.value?.amount < 0);
    if (this.frmval?.value?.expirationDate) {
      if (new Date(this.frmval.value.expirationDate).getTime() < new Date().getTime()) {
        this.expError = true;
      } else {
        this.expError = false;
      }
      if (this.frmval?.value?.amount<0) {
          this.positiveamount = true;
      } else  {
        this.positiveamount = false;
      }
      if ((new Date(this.frmval.value.expirationDate).getTime() > new Date().getTime()) && (this.frmval?.value?.amount>0)) {
        this.store.dispatch(new CardPaymentActions.AddCardPayment({creditCardNumber: creditCardNumber , cardHolder: cardHolder, expirationDate: expirationDate, securityCode: securityCode, amount: amount }) )
        console.log(this.frmval.value);
        this.expError = false;
        this.positiveamount = false;
        this.service.postData(this.frmval.value).subscribe(data => {
          console.log(data);
        },
        error => {
          // console.log(error);
          this.toastr.error('Error because of dummy API call', 'Error', {
            positionClass: 'toast-top-right'
          });
        },
        () => {
          console.log('Finally...');
        })
      }
    }
   
     this.submited  = true;
    //  console.log(this.frmval.value);
    //  console.log(this.frmval.controls["creditCardNumber"].value);

  }

}
