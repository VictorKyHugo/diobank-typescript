export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true


    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
    }

    getName = (): string => {
        return this.name
    }

    deposit = (): void => {
        if(this.validateStatus()){
            console.log('Tu depositou')
        }
    }

    withdraw = (): void => {
        console.log('tu sacou')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
        if(this.status){
            return this.status
        }

        throw new Error('Conta Inativa')
    }
}