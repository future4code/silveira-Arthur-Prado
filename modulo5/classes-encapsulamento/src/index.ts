// 1 - a )
// O constructor serve pra gente poder realizar
// ações nos objetos criados.

// b )

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
  setTransaction(newTransactions: Transaction) {
    this.transactions.push(newTransactions)
  }

}
const newUser = new UserAccount("82738788799", "Rodrigo", 29)



// A frase foi chamada apenas uma vez.

// c ) 
// À partir de métodos getters e setters.

// 2 - 

class Transaction {
  private description: string;
  private value: number;
  private date: string;


constructor(description:string, value:number, date:string) {
  this.description = description;
  this.value = value;
  this.date = date;
  }
}
const newTransactions = new Transaction("oi", 300, "21/06/2022")
newUser.setTransaction(newTransactions)

console.log(newUser)

// 3 - 

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts
  }

  public getAccount() {
    return this.accounts
  }
}

