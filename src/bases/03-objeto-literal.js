const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'NY',
        zip: 55355453,
        lat: 14.2556,
        lng: 34.25456
    }
};

// console.table( persona );

const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 ); 
