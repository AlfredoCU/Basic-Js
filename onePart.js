//Variables en JS.
var nombre;
nombre = 'Alfredo';
var edad = 21;
var precio = 12.5;
canal = 'Youtube'; // VARIABLE GLOBAL

//Constantenes.
const constante = 5;

//Operadores aritmeticos.
var suma = 5 + 5;
var resta = 100 - 85;
var mult = 7 * 5;
var div = 150 / 2;
var mod = 56 % 3;
var a, b, c;
a = 5;
b = a++; //a--
c = ++a; //--a
console.log(edad + ' ' + a + ' ' + b + ' ' + c + ' ' + suma);

//True 1 and False 0
var p = 0;
console.log(p ? 'Hi': 'bye')

//if else else if
var opc = 3
if (opc == 1) {
  console.log('HTML');
}
else if (opc == 2) {
  console.log('CSS');
}
else {
  console.log('JS');
}

//switch
switch (opc) {
  case 1:
    console.log('Hola');
    break;
    case 2:
      console.log('Mundo');
      break;
      case 3:
        console.log('Hi');
        break;
        default:
        console.log('No options');
        break;
}

//for
for (var i = 0; i <= 20; i++) {
  console.log(i);
}

//while
var x= 0;
while (x <= 10) {
  console.log(x);
  x++;
}

//do while
var r = 0;
do {
  r++;
  console.log(r);
} while (r < 5);

//function
function hello(){
  console.log('Hi world');
}
hello();

//funtion argumentos
function myname(name){
  console.log('Hi my name is ' + name);
}
myname('AlfredoCU'); //Le mandamos parametros.

//Mandar funciones como argumentos.
var array1 = [1,2,3]; //Arreglo.
array1.forEach ((elem, index) => { //(function(elem, index)
  console.log('En la posicion: ' + index + ' se encuentra en el elemento: ' + elem);
  //console.log('En la posicion: ${index} se encuentra en el elemento: ${elem}');
});

//for in
for(elem in array1){
  console.log(array1[elem]);
}

//for of
for (elem of array1){
  console.log(elem);
}

//VAR.
function varTest() {
  var t = 1;
  if (true) {
    var t = 2;  // same variable!
    console.log(t);  // 2
  }
  console.log(t);  // 2
}

//LET
//function letTest() {
//  let z = 1;
//  if (true) {
//    let z = 2;  // different variable
//    console.log(z);  // 2
//  }
//  console.log(z);  // 1  No puede ser una variable global LET.
//}

//Funcines anonimas.
(function(){
  var num1, num2;
  function suma (num1,num2){
    console.log(num1 + num2);
  }
  suma(7,7);
});

//Funciones pueden ser aguradadas en variables.
var s = function(){
  console.log('Hey!!');
}

//Objeto.
var miPelotaObj ={
  'color': 'rojo',
  'textura':'lisa',
  'diametro': 15,
  //Métodos.
  'rodar':function(){
    console.log('Estoy rodando');
  }
};
//miPelota.rodar();

function pelota(){
  var color = 'rojo';
  var textura = 'lisa';
  var diametro = 15;

  var rodar = function(){
    console.log('Estoy rodando');
  }
  //Modulos, solo regresamos los metodos que queremos publicos.
  return{
    color: color,
    textura: textura,
    diametro: diametro,
    rodar:rodar
  };
}

//Clases-
//class Pelotas{
//  constructor(co, tex, dia){
//    this.color = co;
//    this.textura = tex || 'lisa';
//    this.diametro = dia;
//  }

//  rodar(){
//    console.log('Estoy rodando');
//  }
//}
//var mipelotasins = new pelotas;

 //constantes.
 //const mipelotasinstwo = new pelotas;
 //mipelotasinstwo.color = 'azul';

//this contesto -> muestra los datos de donde se encuentra si esta dentro de un
//objeto, funcion etc.
console.log(this);

/*
  Alumno.
  Datos generales.
  Calificaciones de diferentes materias.
  Cada materia tiene dos calificaciones la final de cada materia es la maxima.
  Existe la manera de obtener el promedio del alumno.
*/
