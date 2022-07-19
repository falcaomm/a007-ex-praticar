/*
let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);
*/

//apereceu como undefined pq ainda não está definido os valores das variáveis

let nome = prompt ("Qual seu nome?");
let idade = prompt ("Qual sua idade?");

console.log(typeof nome);
console.log(typeof idade);

//Agora os valores das duas variáveis são do tipo strings/texto pq tudo que vem do prompt é texto

console.log('Olá',nome,'você tem',idade,'anos');
