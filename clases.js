class Usuario{

    constructor(nombre,apellido,libros,mascotas){
       
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

    }
    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`)
    }
    countMascotas(){
        console.log(3)
    }
    getBookNames(){
        console.log(this.libros)
    }
    
    

};

const Usuario1 = new Usuario("Emmanuel", "Suasnabar", [{nombre:"cuentos de la selva",autor:"Horacio Quiroga"},{nombre:"La divina comedia",autor:"Dante Alighieri"},{nombre:"Ficciones",autor:"Jorge Luis Borges"}],["Firulais","Fatiga","Huesos"]);

console.log(Usuario1);
Usuario1.getFullName();
Usuario1.countMascotas()
Usuario1.getBookNames()