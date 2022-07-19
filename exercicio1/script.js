let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);

//apereceu como undefined pq ainda não está definido os valores das variáveis

nome = prompt ("Qual seu nome?");
idade = Number (prompt ("Qual sua idade?"));

console.log(nome);
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

//Sem o + ou o number os valores das duas variáveis são do tipo strings/texto pq tudo que vem do prompt é texto 

console.log('Olá',nome,'você tem',idade,'anos.');
