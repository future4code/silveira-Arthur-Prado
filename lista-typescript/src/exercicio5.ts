type Usuario = {
    name: string,
    email: string,
    role: string
}

const arrayUsuarios: Usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const filtraADM = ((array: Usuario[]): object[] => {
    const novoArray = array.filter((pessoa) => {
        if (pessoa.role === "admin") {
                return [pessoa.email]
               }
    }).map((email) => {
        return [email.email]
    }) 
    return novoArray
})

console.log(filtraADM(arrayUsuarios))