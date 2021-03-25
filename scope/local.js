const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
//ejecutamos una variable local fuera de su scope
console.log(hello);


//AMBITO LEXICO
var scope = 'im a global var';

const functionScope = () => {
    //la funcion tiene acceso a esta funcion y sobre ella estara trabajando
    var scope = 'i am a just a local';
    const func = () => {
        return scope
    }
    console.log(func());
};

functionScope();