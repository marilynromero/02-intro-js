import { getHeroeById } from './bases/08-imp-export';


// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout( () => {
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//     }, 2000)
// });

// promesa.then( () => {
//     console.log('Then de la promesa')
// })

const getHeroByIdAsync = ( id ) => {
    
    return new Promise( (resolve, reject) => {
    
        setTimeout( () => {
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe')
            }
        }, 2000)
    });  
}

getHeroByIdAsync(1)
.then( console.log )
.catch( console.warn );









