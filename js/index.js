// Iteration 1: Names and Input

//Criando a variável hacker1
const hacker1 = "Demetrius Jayme de Camargo";

//Print no conteúdo de hacker1
console.log(`The driver's name is ${hacker1}`);

//Criando a variável hacker2
const hacker2 = "José da Silva";

//Print no conteúdo de hacker2
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
//Obtendo a quantidade de caracteres de hacker1
const qtdeHacker1 = hacker1.length;

//Obtendo a quantidade de caracteres de hacker2
const qtdeHacker2 = hacker2.length;

if (qtdeHacker1 > qtdeHacker2)
{
    console.log(`The driver has the longest name, it has ${qtdeHacker1} characters`); 
}
else if (qtdeHacker1 < qtdeHacker2)
{
    console.log(`It seems that the navigator has the longest name, it has ${qtdeHacker2} characters`);
}
else 
{
    console.log(`Wow, you both have equally long names, ${qtdeHacker2} characters!`); 
};


// Iteration 3: Loops /
//Print no nome do driver's name
let driver = [];
for (let j = 0; j < hacker1.length; j++) 
{
  driver[j] = hacker1[j].toUpperCase();
}
console.log(driver.join(" "));

//Print no nome do navigator's name ao contrário
let navigator = [];
for (let z = hacker2.length - 1; z >= 0; z--) 
{
  //console.log(hacker2[z]);
  navigator[z] = hacker2[z];
}
let contrario = navigator.reverse();
console.log(contrario.join(""));

//Print na ordem lexigráfica
PrimeiraLetraHacker1 = hacker1.substring(0, 1);
PrimeiraLetraHacker2 = hacker2.substring(0, 1);

if (hacker1 === hacker2) 
{
  console.log(`What?! You both have the same name?`);
} else 
{
  if (PrimeiraLetraHacker1 < PrimeiraLetraHacker2) 
  {
    console.log(`The driver's name goes first.`);
  } else 
  {
    console.log(`Yo, the navigator goes first definitely.`);
  }
};
