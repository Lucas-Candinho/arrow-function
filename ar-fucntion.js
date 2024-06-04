// 1)Escreva uma arrow function que recebe um array de números e retorna um novo array com todos os valores dobrados.

const dobrar = lista => lista.map(num => num*2); 

// 2) Escreva uma arrow function que recebe um array de palavras e retorna um novo array com as palavras ordenadas pelo comprimento, da mais curta para a mais longa. 

var conjuntoPalavras = []; //declarando o grupo de palavras

while(true) {
    let palavra = prompt("Digite uma palavra ou pressione <ENTER> para sair: "); //adquirindo input das palavras do usuário
    if (palavra == ""){ //quebrando caso seja um item vazio
        break
    }
    conjuntoPalavras.push(palavra);  //inserindo a palavra na array
    conjuntoPalavras.sort((a, b) => a.length - b.length);
}

console.log(conjuntoPalavras);


// 4)Escreva uma arrow function que recebe um array de números e retorna um novo array com todos os valores dobrados.



const filtrarPares = lista => lista.filter((num) => num % 2 == 0); 


// *Exemplo de funcionamento tarefa 1 e 3
const qntsNumeros = parseInt(prompt("Quantos números você quer digitar?: "));
let numeros = [];
let num = 0;

for (let i = 0; i < qntsNumeros; i++) {
    num = parseInt(prompt("Digite um número inteiro: "));
    numeros.push(num);
}

console.log(dobrar(numeros));
console.log(filtrarPares(numeros));






//PESQUISA

/* 

Como funciona a Arrow Function:

    Na última atualização do ECMAScript, ES6, várias funcionalidades novas foram adicionadas, incluindo a Arrow Function.
        A arrow function, de certa forma, permite criar funções com JavaScript com uma estrutura mais curta e com mesmo nível de eficiência.

        A sintaxe de uma função normal é a seguinte:
        
        function() {(argumentos)}
       
        Já a sintaxe básica de uma arrow function é:

        () => {}


        Exemplo.1 - Seja Bem-Vindo!!!:

            const dizerOi = function(nome) {
                return `Seja bem-vindo ${nome}!!!`;
            }

            Essa função executaria bem, mas usamos três linhas de código para retornar uma mensagem. Contudo, nós podemos obter o mesmo resultado com a seguinte arrow function:

            const DizerOi = nome => `Seja bem-vindo ${nome}!!!`;

            Dessa forma também podemos omitir a keyword return, visto que há apenas um retorno possível


                Dessas duas formas o resultado é o mesmo, por isso, o recurso de Arrow Function é muito útil, já que ela pode "abreviar" a função, sem alterar o resultado.

        Exemplo.2 - Calculadora:

            const calc = (num1, num2, operador) => "Resultado: " + eval(`${num1} ${operador} ${num2}`);

            Neste exemplo, já é uma função em Arrow Function, e el funciona de modo que, após inserir o num1,num2 e operador, ela retorna o resultado. Uma calculadora


Exemplos dos exercícios comentados (CANDINHO):

1)


2)


3)





*/