// ------------------- Aula abordada - Método Filter -----------------------------
//Filter sempre vai retornar um array, com a mesma quantidade de elementos ou menos



// ------------------------- Exercício 1 ---------------------------
//Retorne os número maiores que 10

const numeros = [10, 5, 15, 30, 8, 7, 8, 77, 100, 84, 77]

// const callBackNumbers = function(valor, indice, array) {
//     // if(valor > 10) {
//     //     return true
//     // } else {
//     //     return false
//     // }

//     return valor < 10
// }

// const numerosFiltrados = numeros.filter( valor => valor > 10 )

const numerosFiltrados = numeros.filter((valor, indice, array) => {
    // console.log(valor, indice, array)
    return valor > 10
}) //callBackNumbers

// console.log(numerosFiltrados)


// ------------------------- Exercício 2 ---------------------------


//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 30 anos
//Retorne as pessoas cujo o nome termina com a
const pessoas = [
    {nome: "vitor", idade: 21},
    {nome: "victoria", idade: 21},
    {nome: "julio", idade: 31},
    {nome: "gustavo", idade: 24},
    {nome: "joão", idade: 44},
]

const pessoasCincoLetras = pessoas.filter((pessoa) => {
    return pessoa.nome.length >= 5
})

const pessoasTrintaAnos = pessoas.filter((pessoa) => {
    return pessoa.idade > 30
})

const pessoasTerminaComA = pessoas.filter((pessoa) => {
    return pessoa.nome.toLowerCase().endsWith("a")
})

console.log(pessoasCincoLetras)
console.log(pessoasTrintaAnos)
console.log(pessoasTerminaComA)