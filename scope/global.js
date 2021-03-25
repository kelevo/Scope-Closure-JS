//Podemos acceder desde donde sea y siempre a ella por que
//esta declarada en el ambito global

//Variables en scope global
//Reasignar una variable global es una mala practica y eso suele pasar con var
var hello = 'Hello';
//let no permite reasignaciones
let world = 'Hello World';
//const no permite reasignaciones
const helloWorld = 'Hello World!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

//Otra mala practica es definir funcniones sin usar var, let o const
const helloWorld = () => {
    globalVar = "im global";
}
helloWorld();
console.log(globalVar);

//Tambien es mala practica crear una variable global en una doble asignacion
const anotherFunction = () => {
    var localVar = globalVar = 'Im global';
}
anotherFunction();
console.log(globalVar);