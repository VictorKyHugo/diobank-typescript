import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { VipAccount } from "./class/VipAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Matheus", 24)
const companyAccount: CompanyAccount = new CompanyAccount("Vitória", 54)
const vipAccount: VipAccount = new VipAccount("Lucas", 18)

companyAccount.getName()
companyAccount.deposit(11)
companyAccount.withdraw(5)
companyAccount.getLoan(45)
companyAccount.getBalance()

peopleAccount.getName()
peopleAccount.deposit(11)
peopleAccount.withdraw(5)
peopleAccount.getBalance()

vipAccount.getName()
vipAccount.deposit(20)
vipAccount.withdraw(10)
vipAccount.getBalance()


// Para declarar tipo de array, eu posso usar " const teste: number[] " ou " const teste: Array<number> "

// keyof typeof serve pra definir um tipo com as keys de um objeto, se for uma interface só é necessário usar keyof
// https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript