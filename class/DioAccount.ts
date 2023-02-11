export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    protected balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.balance += value
        }
    }

    withdraw = (value: number): void => {
        if(this.validateStatus() && this.isEnoughToWithdraw(value)){
            this.balance -= value
        }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private isEnoughToWithdraw = (valueToWithdraw: number): boolean => {
        if(valueToWithdraw < this.balance){
            return false
        }

        throw new Error('Saldo Insuficiente')        
    }

    protected validateStatus = (): boolean => {
        if(this.status){
            return this.status
        }

        throw new Error('Conta Inativa')
    }
}