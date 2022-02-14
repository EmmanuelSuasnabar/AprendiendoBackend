// funcion basica
function funcionBasica () {
    console.log("hola soy una funcion basica")
}
funcionBasica();
// funcion anonima

// funcion flecha (arrow function)
const funcionFlecha = () => {

    console.log("hola soy una arrow function")

}
funcionFlecha();
// arrow function sugar sintax
const sumar = (n1,n2) => n1 + n2; //misma linea sin llaves es como tener un return invisible

console.log(sumar(5,10));

const saludar = nombre => console.log(`hola me llamo ${nombre}`) //SOLO CUANDO SE RECIBE UN SOLO PARAMETRO PUEDE SER SIN PARENTESIS!!
// TEMPLATE STRINGS (ALT 96)

saludar("Emmanuel");

//CALLBACK
const imprimir = mensaje => console.log(mensaje)

const sumarDos = (n3,n4,callback) => {

    let res = n3 + n4;

    callback(`el resultado es ${res}`);

};

sumarDos(5,3,imprimir);
//PROMESAS
const miPromesa = new Promise((resolve,reject)=>{
    let exito = true;
    if (exito) {
        resolve ("se resolvio correctamente");
    }
    if (exito) {
        reject ("hubo un error");
    }
});

//miPromesa.then(
 //   (dato) => console.log(dato),
 //   (error) => console.log(error)
 //   );
    miPromesa
    .then((dato) => console.log(dato))
    .catch((error) => console.log(error));

    const miHamburguesa = new Promise((resolve,reject)=>{
        let hayPan = true;
        if(hayPan){
            resolve("hamburguesa con bacon")
        }
        if(hayPan){
            reject("no hay pan")
        }
    })

    miHamburguesa
    .then( valor =>{
        console.log(`me voy a comer una rica ${valor}`);
    })
    .catch( error =>{
        console.log(`hubo un problema con el pedido ${error}`);
    })


