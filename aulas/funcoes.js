// function parimpar(n){
//     if(n%2 == 0) {
//         return 'par'
//     } else {
//         return 'ímpar'
//     }
// }

// let res = parimpar(4)
// console.log(res)

// function soma(n1=0, n2=0) {
//     return n1 + n2
// }

// console.log(soma(2, 13))

// let v = function(x){
//     return x*2
// }

// console.log(v(5))

function fatorial(n){
    if (n == 1 ){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(7))