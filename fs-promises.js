const fs = require('fs'); //version reciente de node
//then y catch
fs.promises.mkdir('./archivos-promesas')
.then(()=> console.log('directorio creado'))
.catch((error)=> console.log(error.message));

fs.promises.readFile('./archivos-promesas/archivotexto.txt','utf-8')
.then((contenido)=> console.log(contenido))
.catch((error)=> console.log(error,message));

//async wait leer y renombrar en una misma funcion
const leerArchivo = async () =>{
try {
const contenido = await fs.promises.readFile('./archivos-promesas/archivotexto.txt','utf-8')
console.log(contenido);
await fs.promises.rename('./archivos-promesas/archivotexto.txt','./archivos-promesas/archivorenombrado.txt');
console.log('archivorenombrado');
}
catch(error){
    console.log(error.message);
}
};

leerArchivo();

/*const renombrarArchivo = async () =>{
    try{
        await fs.promises.rename('./archivos-promesas/archivotexto.txt','./archivos-promesas/archivorenombrado.txt');
console.log('archivorenombrado');
       
    }
    catch(error){
        console.log(error.message);

    }

}
renombrarArchivo();*/
