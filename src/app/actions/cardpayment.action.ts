import { Injectable } from '@angular/core';
import {Action } from '@ngrx/store';
import {CardPayment} from './../models/cardpayment.model';

export const ADD_CARDPAYMENT = '[CARDPAYMENT] Add';

export class AddCardPayment implements Action{
    readonly type = ADD_CARDPAYMENT

    constructor(public payload: CardPayment){}
}

export type Actions = AddCardPayment;