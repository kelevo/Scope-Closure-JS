const person = () => {
    var saveName = 'Name';
    //Metodos que vamos a utilizar => getName y setName
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}
//Solo tendremos acceso mediante los metodos getName y setName
newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Patrick');
console.log(newPerson.getName());