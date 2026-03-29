// DECLARAÇÔES

var x,y,z;

x = 5;
y = 6;
z = x + y;

console.log(z);

/* var tem escopo global e permite redeclaração */ 
/* let tem escopo em blocos e não permite redeclaração no mesmo bloco*/
/*conts escopo de bloco e não permite redeclaração após a inicilização*/

//VARIÀVIES
/*
function exemploLet(){
    var x = 10;
    console.log(x);
    if(true){
        var x = 20;
        console.log(x);
    }
    console.log(x);
}

exemploLet();*/

//TIPOS DE DADOS
/*
let saudacao = "ola";
let idade = 19;
let estaChovendo = true;
let valorindefinido;
let grandeNumero = 232323232323232n;

console.log(saudacao, idade, estaChovendo, valorindefinido);

let inteiro = 10;
let decimal = 10.5;
console.log(typeof inteiro);
console.log(typeof decimal);
console.log(typeof grandeNumero);


console.log(Math.sqrt(16));
*/

/*
let nome = "Kaua";
let comprimentar = "Olá " + nome;
console.log(comprimentar.length);


let frutas = ["Maça"];

frutas.push("Laranja");
//frutas.pop();
frutas[0] = "Pera";
let tamanho = frutas.length;

frutas.forEach(fruta => console.log(fruta))

console.log(tamanho);*/

/*
let idade = 19;
let nota = 85;

if(idade >= 18 && nota >= 80){
    console.log("Maior de idade e fds pode ser preso já")
}else{
    console.log("É menor de idade e ainda é burro HAUHUAHUA, não pode fazer oque quiser 🤣🤣🤣🤣")
}


for(let i = 0; i < 10; i++){
    console.log("Tentativa numero: " + i + "°");
}

let cores = ["RED", "BLUE", "GREEN", "PURPLE", "YELLOW"];

for (let i = 0; i < cores.length; i++){
    console.log(cores[i])
}
*/


//Inicializa um objeto 
/*
let pessoa = {nome: "Kauã", idade: 19, cidade: "CDO "}

for(let chave in pessoa){
    console.log(chave + ": " + pessoa[chave]);
}


let frutas = ["Maçã", "Banana", "Pera"];

for(let fruta of frutas){
    console.log(fruta); 
}
*/

const numero = [1, 100, 10 ,5 , 25, 40];

maiorNumero(numero);

function maiorNumero(array){
    console.log(Math.min.apply(null, array));
}