/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
var mayus=nombre.charAt(0).toUpperCase()
var palb=nombre.slice(1)
return mayus+palb
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
  return cb(num1, num2)
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   // var resul=0
   // for (i=0;i<arrayOfNumbers.length;i++){
   //    resul=resul + arrayOfNumbers[i]
   // }
   // cb(resul)
   resul=0;
   arrayOfNumbers.reduce(function(acc, elem){
      return resul= acc+elem;
   })
   cb(resul)

}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   // for(i=0;i<array.length;i++){
   //    cb(array[i])
   // }
   array.forEach(function(elem){
      cb(elem);
   })   
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   // var nuevoArr=[]
   // for (i=0;i<array.length;i++){
   //    nuevoArr.push(cb(array[i]))
   // }
   // return nuevoArr
   var resul=array.map(function(elem){
      return cb(elem);
   })
   return resul;
   // var elemento=0; var arr=[]
   // var resul=array.forEach(function(elem){
   //    elemento= cb(elem)
   //    arr.push(elemento)
   // })
   // return arr;

}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   // var resul=[] ------CON FOR NORMAL----
   // for(i=0;i<arrayOfStrings.length;i++){
   //    if(arrayOfStrings[i].startsWith("a"))
   //     resul.push(arrayOfStrings[i])
   // }
   // return resul
   // var arr=[] ----CON FOR EACH--------
   // arrayOfStrings.forEach(function(elem){
   //    if(elem.charAt(0)==="a"){
   //       arr.push(elem)
   //    }
   // })
   // return arr
   var resul=arrayOfStrings.filter(function(elem){
      return elem.charAt(0)==="a"
   })
   return resul;

}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
