import {Action} from '@ngrx/store';
import {CardPayment} from './../models/cardpayment.model';
import * as CardPaymentActions from './../actions/cardpayment.action';

const initialState: CardPayment = {
    creditCardNumber : '',
    cardHolder : '',
    expirationDate: undefined,
    securityCode : '',
    amount : undefined
}

export function reducer(state: CardPayment[] = [initialState], action: CardPaymentActions.Actions ){
    switch(action.type){
        case CardPaymentActions.ADD_CARDPAYMENT:
            return [... state, action.payload];
        default :
            return state;
    }
}