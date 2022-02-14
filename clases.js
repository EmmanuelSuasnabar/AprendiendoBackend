class Usuario{

    constructor(nombre,apellido,libros,mascotas){
       
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(mascota){
        this.mascotas.push(mascota)

    }
    countMascotas(){
        return this.mascotas.length
    }
    addBooks(nombre,autor){
        const libro = {"nombre":nombre,"autor":autor}
        this.libros.push(libro);

    }
    getBookNames(){
        const array = [];
        for(let i = 0; i < this.libros.length; i++){
            const libro = this.libros[i];
            array.push(libro.nombre);
        }
        
        return array
    }
    
    

};

const usuario1 = new Usuario("Emmanuel", "Suasnabar", [{nombre:"cuentos de la selva",autor:"Horacio Quiroga"},{nombre:"La divina comedia",autor:"Dante Alighieri"},{nombre:"Ficciones",autor:"Jorge Luis Borges"}],["Firulais","Fatiga","Huesos"]);
usuario1.addMascota('Bigotes')
usuario1.addMascota('tubi')
usuario1.addBooks("cien anios de soledad","gabriel garcia marquez");
console.log(usuario1);
usuario1.getFullName();
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());