//setInmediate()
// Se usa para ejecutar código asíncrono en la próxima iteración del ciclo de eventos (lo más pronto posible)
// Se ejecuta después del código síncrono

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setInmediate()');

setImmediate(mostrarTema, 'Node.js');

console.log('Después de setInmediate()');