/* 
 A "Arrow function" 'dobrar' toma como argumento um array (chamado lista) utiliza o método .map() 
 que toma cada elemento do array e o multiplica por 2 
 (no caso, que também é uma "arrow function", tomando um número e retornando ele dobrado)
 Por fim, a função retorna o array, já com seus elementos dobrados. 
*/

const dobrar = lista => lista.map(num => num*2); 

/*
 Uma "Arrow Function" dentro do método .sort() que toma 'a' e 'b', dois elementos de um array e retorna a diferença dos dois,
 dessa forma, ordena-se os elementos por tamanho.
*/

// conjuntoPalavras.sort((a, b) => a.length - b.length); 

/*
 A função filtrarPares toma um array e retorna o array filtrado, usando o metodo .filter() que possui outra "Arrow function" dentro de si,
 que toma um número e retorna se ele é divisível por 2.
*/

const filtrarPares = lista => lista.filter((num) => num % 2 == 0); 


// --- EXEMPLOS DE FUNCIONAMENTO ---

// Tarefa 1 e 3
const qntsNumeros = parseInt(prompt("Quantos números você quer digitar?: "));
let numeros = [];
let num = 0;

for (let i = 0; i < qntsNumeros; i++) {
    num = parseInt(prompt("Digite um número inteiro: "));
    numeros.push(num);
}

console.log(dobrar(numeros));
console.log(filtrarPares(numeros));
// Tarefa 1 e 3

// Tarefa 2
var conjuntoPalavras = []; 

while(true) {
    let palavra = prompt("Digite uma palavra ou pressione <ENTER> para sair: "); 
    if (palavra == ""){ 
        break
    }
    conjuntoPalavras.push(palavra);  
    conjuntoPalavras.sort((a, b) => a.length - b.length);
}

console.log(conjuntoPalavras);
// Tarefa 2


// --- PESQUISA ---

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

*/