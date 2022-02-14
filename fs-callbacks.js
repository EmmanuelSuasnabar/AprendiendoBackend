const fs = require('fs');
//crear carpeta con callback
fs.mkdir('./archivos-callbacks',(error)=> {
    if(error){
        console.log(error.message);
    }
    else{
        console.log('directorio creado');
    }

});
//leer archivo 
fs.readFile('./archivos-callbacks/archivotexto.txt', 'utf-8', (error,contenido) =>{
    if(error){
        console.log(error.message);
    }
    else{
        console.log(contenido);
    }
} );
//crear archivo con contenido
fs.writeFile('./archivos-callbacks/archivo-nuevo.txt','aprendiendo a programar',(error)=>{
    if(error){
        console.log(error.message);
    }
    else{
        console.log('archivo creado!');
    }

})
//appendeFile para agregar contenido al archivo