//Podemos crear coslures de diferentes formas y tambien
//de formas involuntarias, esto significa que no tenemos control
//sobre lo que estamos creando
const anotherFunction = () => {
    //al ejecutarlo con var, va a imprimir 10 veces 10
    //por que var toma el ultimo valor dado que es 10
    //por eso tenemos que usar let para no crear un closure involuntario
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction();
