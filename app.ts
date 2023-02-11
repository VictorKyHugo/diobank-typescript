import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Matheus", 24)
const companyAccount: CompanyAccount = new CompanyAccount("Matheus", 24)

companyAccount.deposit(11)
companyAccount.withdraw(5)
companyAccount.getLoan(45)
companyAccount.getBalance()


// Para declarar tipo de array, eu posso usar " const teste: number[] " ou " const teste: Array<number> "

// keyof typeof serve pra definir um tipo com as keys de um objeto, se for uma interface só é necessário usar keyof
// https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript