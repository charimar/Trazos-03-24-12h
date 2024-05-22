//es el peso de una persona en kilogramos dividido por el cuadrado de la estatura en metros.
// imc = peso(kg)/altura*altura(metros)

/*
Composición corporal	  Índice de masa corporal (IMC)
Peso inferior al normal	   Menos de 18.5
Normal	                   18.5 – 24.9
Peso superior al normal	   25.0 – 29.9
Obesidad	               Más de 30.0 */

let peso = prompt('Escriba su peso en Kilos: ej 70');
let altura = prompt('Escriba su altura en metros: ej 1.70');
console.log(peso, altura);
let imc = peso / (altura * altura);
imc = imc.toFixed(1);
console.log(imc);
if (imc < 18.5) {
  console.log('Su IMC es: ' + imc + ' Peso inferior al normal');
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log('Su IMC es: ' + imc + ' Peso normal');
} else if (imc >= 25.0 && imc <= 29.9) {
  console.log('Su IMC es: ' + imc + ' Peso superior al normal');
} else {
  console.log('Su IMC es: ' + imc + ' Obesidad');
}
