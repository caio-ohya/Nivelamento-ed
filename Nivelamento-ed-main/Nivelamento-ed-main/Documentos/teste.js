//Aluno Caio Ohya 3 tec


//1. Exiba a mensagem "Olá Mundo"
console.log("Olá Mundo");

//2. Crie uma variavel com seu nome e exiba o valor
let nome = "Caio Ohya";
console.log(nome); 

//3. Some dois números e exiba o resultado
let soma = 2 + 2;
console.log(soma);

//4.Subtraia dois numeros e exia o valor
let subtraia = 4 - 2;
console.log(subtraia);

//5. Descura o resto da divisão de um número por outro 
let resto = 10 % 3;
console.log(resto);

//6. Crie uma váriavel booleana(True False) e exiba seu valor
let estaGanhando = true;
console.log(estaGanhando);

//7. Verifique se um número é maior que outro e exiba o resultado
let maiorQue = 5>10;
console.log(maiorQue);

//8. Crie duas váriaveis com algum valor e exiba a concatenação delas.
let nome2 = "Caio";
let nome3 = "Ikaro";
console.log(nome2, nome3);

//9. Descubra o tipo de uma variável
let valor = 100
console.log(typeof valor); //typeof mostra o tipo de variavel

//10. Converta número para string 
let num = 10;
console.log(String(num));

//11. String para numero
let texto = "15"
console.log(Number(texto));




//LAÇOS DE REPETIÇÃO

//12. Exiba no console numero de 0, 10;
for(let i =0; i<=10; i++){
    console.log(i);
}

//13. Exiba números pares até 20
for(let i =0; i<=20; i+=2){
    console.log(i);

}

//14. Mostre no console numero de 10 ate 1.
for(let i =10; i>10; i--){
    console.log(i);
}

//15. Some numeros de 1 a 5.
let somaLoop = 0;
for(let i =0; i<=5; i++){
    somaLoop+=i;
    console.log("valor de i  "+i+ " valor de somaLoop " +somaLoop);
}
console.log(somaLoop);

//16. Faça a tabuada do 3.
for(let i =1; i<=10; i++){
    console.log("3 x "+i+ " = " +3*i);

}