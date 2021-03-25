const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();
console.log(fruit); //Nos manda error

//-----------------------------------------

const anotherFunction = () => {
    var x = 1; //var si reasigna asi que nos mandara 2
    var x = 2;
    let y = 1; //let no reasigna asi que manda error
    let y = 2;
    console.log(x);
    console.log(y);
}
//Tenemos que dejar de usar var y solo usar const y let
anotherFunction();