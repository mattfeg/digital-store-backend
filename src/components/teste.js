// let animais = [];
// console.log(animais)
// animais.push("Zebra", "Leao")
// console.log(animais)
// animais.shift()
// console.log(animais)
// animais.unshift("Primeiro", "Segundo")
// console.log(animais)
// animais[1] = "Girafa"
// console.log(animais)
// console.log(animais.length);
// for(let i = 0; i < animais.length; i++){
//     console.log(animais[i]);
// }

// let nome = ['Isaac', 'Marcus', 'Adriana', 'Savio']
// for(let i = 1; i <= 100; i++){
//     if(i == 13){ 
//         continue
//     }
//     console.log(i);
// }

// let idade = 10
// idade < 20 ? console.log('maior') : console.log('menor');

const calcularAreaT = (altura, largura) => altura * largura

calcularAreaT(3,4)
console.log(calcularAreaT(3,4));

const parOuImpar = (num) =>{
    num %2 == 0 ? console.log('Par') : console.log('Impar');
}

parOuImpar(5)

const menor = (string)=> string.toLowerCase()
menor("Isaac")
console.log(menor("Isaac")
);

const soma = (a,b)=>{
    return function (c){
        console.log(a + b + c)
    }
}
soma(3,4)(4)    