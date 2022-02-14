const fs = require('fs');

fs.mkdirSync('./archivos.sync')
//Escribir un archivo
try{
    fs.writeFileSync('./archivos-sync/archivo-nuevo.txt', 'Soy un archivo nuevo');
    console.log('archivo creado')
}
catch(err){
    console.log(err.message);
}
//Agregar un archivo a uno existente
try{
    fs.appendFileSync('./archivos-sync/archivo-nuevo.txt', 'Soy un archivo agregado')
    console.log('archivo agregado exitoso')
}
catch(err){
    console.log(err.message);
}
//Eliminar un archivo fs.unlinkSync