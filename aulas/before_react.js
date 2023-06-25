// Nullish Coalescing Operator

// const idade = 0

// document.body.innerText = 'sua idade é: ' + (idade ?? 'Não informado!')

// const user = {
//     name: 'Whillian',
//     idade: 35,
//     nickname: 'Whill',
//     address: {
//         street: 'rua teste',
//         number: 176,
//     },

// }

// Rest aperator

//const {name, ...rest}=user

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const [first, ,third, ...rest] = array

// document.body.innerText = JSON.stringify({first, third, rest})


// Desestruturação

// function mostraIdade({idade}){
//     return idade
// }

// const {address, idade: age, nickname = 'Whill'} = user

//document.body.innerText = JSON.stringify({address, age, nickname})


// Optional Chaining

// const user = {
//     name: 'Whillian',
//     idade: 35,
//     address: {
//         street: 'rua teste',
//         number: 176,
//         zip: {
//             code:'89160000',
//             city: 'São Luis',
//         },
//         showFullAddress(){
//             return 'ok'
//         }
//     },

// }

// document.body.innerText = user.address?.showFullAddress?.()
//document.body.innerText = user.address?.zip?.code ?? 'Não Informado'

const vetor = [1, 2, 3, 4, 5]

// for (const i of vetor){
//     document.body.innerText +=i
// }

// vetor.forEach(item =>{
//     document.body.innerText += item
// })

