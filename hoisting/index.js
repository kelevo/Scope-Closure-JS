//Nostros como desarrolladores creemos que cuando estamos construyendo
//nuestras aplicaciones, recurrimos a la asignacion de cada uno de estos
//como lo vamos escribiendo en nuestro programa y si en parte
//esto es cierto pero no siempre tiene el mismo punto a la hora
//de estar construyendo nuestras aplicaciones cuando tenemos hoisting

a = 2;
var a;
console.log(a); //el resultado es 2

//esto pasa por que al compilarse el codigo el hoisting eleva las
//declaraciones de las variables

//El siguiente codigo nos mandara un error por que estamos intentando
//acceder al valor, lo que es muy distinto al ejemplo anterior
console.log(a);
var a = 2;

//JS solo utiliza el hoisting en declaraciones y no en inicializaciones

//Otro ejemplo
//Si colocaramos primero la llamada nameOfDog('Chabela') y despues
//la funcion, iggualmente se va a mostrar el nombre, por que el motor
//de JS antes de hacer la llamada primero complila la funcion (la eleva)
//y despues realiza la llamada
function nameOdDog(name) {
    console.log(name)
}
nameOdDog('Chabela');
//Quedando de la siguiente manera---
//nameOdDog('Chabela');
//function nameOdDog(name) {
//    console.log(name)
//}