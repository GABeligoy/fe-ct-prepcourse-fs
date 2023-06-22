/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloP=[];
   for(var prop in objeto){
      var arregloI =[];
      arregloI.push(prop)
      arregloI.push(objeto[prop])
      arregloP.push(arregloI)
   }
   return arregloP
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arr=string.split("").sort()
   var object={}
   for(var i=0;i<arr.length;i++){
      var cont=0
      for(var j=0;j<arr.length;j++){
      if(arr[i]===arr[j]){
         cont=cont+1
      }
   }
   object[arr[i]]=cont
}
return object
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus="";
   var minus="";
   for(var i=0;i<string.length;i++){
      if (string[i]===string[i].toUpperCase()){
         mayus=mayus+string[i]
      }else minus=minus+string[i]
   }
   return mayus+minus
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arreg=frase.split(" ")
   for(var i=0;i<arreg.length;i++){
      var resul=arreg[i].split("").reverse().join("")
      arreg[i]=resul
   }
   return arreg.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var resul=numero.toString()
   if (resul===resul.split("").reverse().join("")){
      return "Es capicua"
   }else return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newStr=""
  for(var i=0;i<string.length;i++){
      if(string[i]!=="a"&&string[i]!=="b"&&string[i]!=="c"){
          newStr=newStr+string[i]
      }
   }
   return newStr
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var newArr=[]
  for (var i=0;i<arrayOfStrings.length;i++){
    for(var j=0;j<arrayOfStrings.length;j++){
      if(arrayOfStrings[i].length<arrayOfStrings[j].length || newArr[i]===arrayOfStrings[j]){
         newArr.push(arrayOfStrings[i])
      }
    }
}
  return newArr
// var arr=[]
// arrayOfStrings.forEach(function(elem){
//    if(elem.length<elem.length+1){
//       return arr.push(elem)
//    }
// })
// return arr;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var newArr=[]
   array1.forEach(element=>{
      if(array2.includes(element)){
         newArr.push(element)
      }
   })
   return newArr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
