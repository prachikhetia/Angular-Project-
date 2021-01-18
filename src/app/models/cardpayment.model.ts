export interface CardPayment {
    creditCardNumber : string;
    cardHolder : string;
    expirationDate : Date;
    securityCode : string;
    amount : number;
}