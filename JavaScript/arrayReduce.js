// ------------------- Aula abordada - Método Reduce -----------------------------
//Reduce sempre vai retornar um único elemento

// ------------------------- Exercício 1 ---------------------------
// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [10, 5, 15, 30, 8, 7, 8, 77, 100, 84, 77]

const somaNumeros = numeros.reduce((acumulador, valor, indice, array) => {
    return acumulador + valor
}, 0) //valor inicial do acomulador

console.log("Soma dos números: ", somaNumeros)

const arrayPares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador
}, []) // Inícia com um array vazio

console.log("números Pares: ", arrayPares)

const dobroValores = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador
}, []) // Inícia com um array vazio

console.log("dobro dos números: ", dobroValores)

// ------------------------- Exercício 2 ---------------------------
// Retorne a pessoa mais velha 

const pessoas = [
    {nome: "vitor", idade: 21},
    {nome: "victoria", idade: 21},
    {nome: "julio", idade: 31},
    {nome: "gustavo", idade: 24},
    {nome: "joão", idade: 44},
]

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) {
        return acumulador
    }
    return valor
})

console.log("pessoa mais velha: ", pessoaMaisVelha)
