class Programador {

    constructor(nombre,edad){

        this.nombre = nombre;
        this.edad = edad;

    }
    //metodo   
    saludo (){
        console.log("hola soy "+this.nombre, "y tengo "+this.edad)
    }
};

const programador1 = new Programador("Emmanuel", 29);
programador1.saludo();
console.log(programador1);
