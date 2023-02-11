import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number):void => {
        const bonusValue = 10
        if(this.validateStatus()){
            this.balance += value + bonusValue
        }
    }
}