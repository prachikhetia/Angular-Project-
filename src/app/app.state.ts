import { CardPayment } from './models/cardpayment.model';

export interface AppState{
    readonly cardpayment : CardPayment[];
}