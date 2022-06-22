class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string,
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      public getIntroduce(): string {
        return `Olá, sou ${this.name}. bom dia!`
      }
      
  }

  const newUser = new User("12345678999", "arthur@labenu.com", "Arthur", "123456")
  console.log(newUser.getId(), newUser.getEmail(), newUser.getName())
  

//   Exercício 1 - 
//   a )
//   Seria se chamasse o newUser diretamente.
//   b ) Uma vez.

//   Exercício 2 - 

  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }
  const newCustomer = new Customer("1231427974", "abc@labenu", "Arthur", "123456", "238748768982390")
  console.log(newCustomer.getCreditCard(), newCustomer.getIntroduce())

  // a ) 
  // Uma.
  // b ) 
  // Duas, pois a classe Customer é uma subclasse da classe User, fazendo
  // com que ela seja chamada novamente antes da classe Customer ser chamada.

  // Exercício 3 - 
  console.log(newCustomer)

  // a )
  // Está sendo puxada.

// Exercício 4 - 
// Feito acima.
// Exercício 5 - 
// Feito acima.

// Exercícios de Polimorfismo

// Exercício 1

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 77;
  }
}

//  console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())

// a) Todas as propriedades foram impressas no terminal.

// Exercício 2
export abstract class Place {
  constructor(protected cep: string) {}

    public getCep(): string {
        return this.cep;
  }
}

// a) 
// Diz que não é possível criar uma instância de uma Classe Abstrata
// const newPlace = new Place('05858555')

// b)
// Acredito que para criar uma instância com essa classe, deveríamos atribuir o Extends a agluma outra classe e apenas adicionando a ela as propriedades necessárias.

// Exercício 3
export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }
  public getResidentsQuantity(): number {
      return this.residentsQuantity
    }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }
  public getFloorsQuantity(): number{
      return this.floorsQuantity
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
        ) {
        super(cep);
  }
  public getMachinesQuantity(): number{
      return this.machinesQuantity
  }
  
}

const newResidence = new Residence(1, "55587444")
const newCommerce = new Commerce(3, "41401333")
const newIndustry = new Industry(100, "87414458")

console.log(newResidence.getCep())
console.log(newCommerce.getCep())
console.log(newIndustry.getCep())

// Exercício 4

// a) 
// Ela possui as propriedades name, registrationNumber, consumedEnergy, cpf, residentsQuantity e cep.
// E os métodos getCpf(), calculateBill(), getResidentsQuantity() e a getCep(). Sendo as duas últimas trazidas das classes pai dela.

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

// Exercício 5
// a) 
// As semelhanças é que ela usa o extends (porém de uma outra classe) e usa o implents do Client. Fazendo possível usar a função de calcular conta,
// ela possui a mesma estrutura da classe Client e usa a classe abstrata Place para atribuir o cep

// b) 
// As diferenças é que agora para usar a calculateBill() nós podemos aproveitar a função e só mudar os valores recebidos e calculados, ela usa o extends da classe Commerce
// e ao invés de usar o getCpf() ela usa o getCnpj()

class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  public getCnpj(): string {
    return this.cnpj;
  }
}

// Exercício 6

// a)
// Deve ser filha da Classe Industry, pois ela atribui as propriedades necessárias e convenientes para esse cliente.
// b)
// Ela usa a interface Client, pois de novo o Client já traz uma estrutura de propriedade conveniente podendo assim ter um padrão mais limpo das contas.
// c)
// Pois o getter dela é uma propriedade private, sendo assim tendo que se tornar public dentro da classe para melhor acesso e manipulação da Classe 
// sem precisar ter que procurar muito no código. Não usamos setters porque não é responsabilidade dessa classe alterar algo.

class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string, // tanto faz ser string ou number
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}