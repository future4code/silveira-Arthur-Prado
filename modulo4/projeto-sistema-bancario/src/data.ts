export type User = {
    name: string,
    cpf: number,
    birthday: string,
    transations: Transations[]
}

 export type Transations = {
    value: number,
    description: string,
    paymentDate: string,
}

export const arrayUsuarios: User[] = [
  {
    name: "Digão",
    cpf: 39359489499,
    birthday: "05/10/1994",
    transations:[
        {
          value: 5000,
          description: "aaaa",
          paymentDate: "06/01/2022",
        }
    ]
  },
  {
    name: "João",
    cpf: 39359489488,
    birthday: "12/04/1997",
    transations:[
        {
          value: 3000,
          description: "cccc",
          paymentDate: "06/02/2022",
        }
    ]
  },
  {
    name: "Maria",
    cpf: 39359489477,
    birthday: "03/18/1992",
    transations:[
        {
          value: 1000,
          description: "eeee",
          paymentDate: "05/10/2022",
        }
    ]
  },
  {
    name: "Joana",
    cpf: 39359489466,
    birthday: "08/03/2002",
    transations:[
        {
          value: 500,
          description: "ffff",
          paymentDate: "05/20/2022",
        }
    ]
  },
];
