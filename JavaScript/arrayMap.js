// ------------------- Aula abordada - Método Map -----------------------------
//Map sempre vai retornar um array, com a mesma quantidade de elementos

// ------------------------- Exercício 1 ---------------------------
//Dobre os números do array

const numeros = [10, 5, 15, 30, 8, 7, 8, 77, 100, 84, 77]

const numerosDobrados = numeros.map(num => {
    return num * 2
})

console.log("números dobrados: ", numerosDobrados)


// ------------------------- Exercício 2 ---------------------------
//Para cada elemento:
//Retorne apenas uma string com nome da pessoa
//Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: "vitor", idade: 21},
    {nome: "victoria", idade: 21},
    {nome: "julio", idade: 31},
    {nome: "gustavo", idade: 24},
    {nome: "joão", idade: 44},
]

const arrayApenasComNome = pessoas.map(pessoa => {
    return pessoa.nome
})

console.log("Array de nome: ", arrayApenasComNome)

const arraySemNome = pessoas.map(pessoa => {
    // delete pessoa.nome
    // return pessoa

    return {
        idade: pessoa.idade
    }
})

console.log("Array de idade: ", arraySemNome)

const arrayCoId = pessoas.map((pessoa, indice) => {
    return {...pessoa, id: indice}
})

console.log("Array com ID: ", arrayCoId)

