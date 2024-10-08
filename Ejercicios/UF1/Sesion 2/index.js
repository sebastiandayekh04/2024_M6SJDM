/*console.log('Hola sesion 2')
//sumar numeros
// pedir datos con prompt

const numero = prompt('introduce un nùmero: ') 
console.log('numero', numero)
const numero2 = prompt('introduce un nùmero (otra vez): ') 
console.log('numero2', numero2)
console.log('numero2', numero2)

//convertir texxto a numero
console.log('suma: ', parseInt(numero) + parseInt(numero2)) */

// Juego de los Numeros

const numeroAdivinar =  10
let numeroIntroducido = -1
let intentos = 0


while ( intentos<3 && numeroAdivinar != numeroIntroducido  )
    {
    console.log('intentos:',intentos)
    let numeroIntroducido = prompt('Introduce un numero: ')
    console.log('numeroIntroducido:',numeroIntroducido)



    if (numeroIntroducido < numeroAdivinar) {
        console.log('El numero es mayor')
    }   
   
    else if (numeroIntroducido > numeroAdivinar){
        console.log('El numero es menor')
        
    } 
    else {
        console.log('lo has acertado!!!')
    } 
    intentos++
 //numeroIntroducido = prompt('Introduce un numero: ')
} 
