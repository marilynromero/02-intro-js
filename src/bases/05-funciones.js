
// const saludar = function( nombre ) {
//     return `Hola, ${nombre}`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;

console.log( saludar2('Marchu') );
console.log( saludar3('Fercho') );

const getUser = () => ({
    uid: 'ABC123',
    username: 'Marchu_143'
});

const user = getUser();
console.log( user );

// Homework
const getUsuarioActivo = ( nombre ) => ({
    uid: 'AVF456',
    username: 'nombre'
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );

// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'AVF456',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log( usuarioActivo );


