import { Customer } from "./customer";
import { Invoice } from "./invoice";

export class Supplier extends Customer{
    account_number: string;
    

    constructor(account_number: string){
        super();
        this.account_number=account_number;
    }
    invocices:Invoice[]=[];
}
