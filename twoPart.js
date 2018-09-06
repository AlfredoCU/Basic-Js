//Callbacks. Funcion a ejecutar por cada elemento que recibe tres argumentos.
//currentVAlue, index, array. La funcion se manda como parametro.
function hi(){
  console.log('Hello world');
}

function init(callback){
  console.log('Im init');
  callback();
}
init(hi);

//Arrow functions
function Balon(){
  var color;
  var arr = [5,9,7];

  function init1(){
    console.log(this); //Contesto Objeto.
    console.log('Soy un balon');
    arr.forEach((currentVAlue) =>{ //Esto evita window y retorna el arreglo.
      //console.log(this); (function(currentVAlue) Contesto window porque esta dentro de una funcion.
      console.log(currentVAlue);
    });
  }

  return{
      color:color,
      init1:init1
  };
}
var miBalon = Balon();
miBalon.init1();

//Modulos.
//Falsy and truthy.
//Hosting.
//Strict mode.

//Iife
(function(){
  console.log('Funcion que se llama así misma eso son los iife');
})();

//Closures.
function Pelota(){
  var color;
  var arr = [5,7,9];
  //Tiene acceso a la variable.
  function init2(){
    console.log(color);
  }
}

//Prototypes.
