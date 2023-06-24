// let num = [5, 8, 2, 9, 3]
// num.sort()
// num.push(1)
// console.log(`Nosso vetor é ${num}`)
// console.log(`Nosso vetor tem ${num.length} possições`)
// console.log(`O primeiro valor do vetor é ${num[0]}`)

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
// for (let pos = 0; pos < valores.length; pos++){
//     console.log(`A possição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores){
    console.log(`A possição ${pos} tem o valor ${valores[pos]}`)
}

