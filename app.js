const { Console } = require('console');
const fs = require('fs');


console.log('Antes de leer el archivo');

//COMO LEER UN ARCHIVO
fs.readFile('index.html','utf-8', (err, contenido) => {
  if(err){
    //console.log(err); // Loggea un error y sigue la ejecución
    throw err;  //Loggea el error, indicando la línea donde se produjo, y detiene la ejecución

  }else{
  //  console.log(contenido);
  }
  //console.log("Mensaje prueba de loggeo...");
});

console.log('Después de leer el archivo')

//COMO RENOMBRAR UN ARCHIVO
fs.rename('index.html','main.html', (err) => {
  if(err){
    throw err;
  }
  console.log('Nombre cambiado exitosamente')
});

console.log('Después de renombrar el archivo');

//Agregar contenido al final de un archivo
fs.appendFile('index.html','<p>Hola</p>', (err) =>{
  if(err) {
    throw err;
  }
  console.log('Archivo actualizado');
});

console.log('Después de agregar contenido al final del archivo');

//Reemplazar todo el contenido del archivo
fs.writeFile('index.html','Contenido Nuevo', (err) =>{
  if (err){
    throw err;
  }
  console.log('Contenido reemplazado exitosamente');
})

console.log('Después de reemplazar el contenido del archivo');

//Eliminar archivos
fs.unlink('index.html', (err) => {
  if(err){
    throw err;
  }
  console.log('Archivo eliminado correctamente');
})

console.log('Después de eliminar el archivo');