const fruits = () => {
    if (true) {
        //como declaramos con var, van a poder ser accedidos por todos los
        //elementos dentro de la funcion
        var fruits1 = 'apple';
        //solo podremos acceder a fruits2 dentro del if
        let fruits2 = 'banana';
        //solo podremos acceder a fruits3 dentro del if
        const fruits3 = 'kiwi';
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();

//--------------------------------------------------

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

//-------------------------------------------

//El siguiente codigo, nos va a imprimir 10 veces 10, por el scope de la
//variable
const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction();

//El siguiente codigo, nos va a imprimir del 1 al 9, lo unico que
//cambia es que i en lugar de ser var ahora es let
const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction();
