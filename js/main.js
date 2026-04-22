// Ejercicio 1: Saludo personalizado
function saludar(nombre) {
return `¡Hola, ${nombre}!`;
}
let resultado = saludar("Thaís");
console.log(resultado);

// Ejercicio 2: Suma de dos números
function suma(a, b) {
  return a + b;
}
console.log(suma(1989, 100));

// Ejercicio 3: Escribe una función llamada esPar que reciba un número y devuelva true si el número es par o false si es impar.
function esPar (num) {
    return num % 2 === 0;
}
console.log(esPar(1));
console.log(esPar(10));
console.log(esPar(26));
console.log(esPar(49));

// Ejercicio 4: Escribe una función llamada mayorDeTres que reciba tres números como argumentos y devuelva el número mayor.
function mayorDeTres (num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
    } else if (num2 >= num1 && num2 >= num3) {
    return num2;
    } else {
    return num3;
    }
}
console.log(mayorDeTres(1, 5, 7));
console.log(mayorDeTres(10, 500, 9));
console.log(mayorDeTres(26, 450, 900));
console.log(mayorDeTres(49, 12, 85));

// Ejercicio 5: Conversión de grados Celsius a Fahrenheit