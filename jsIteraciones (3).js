function mostrar()
/*{

var clave;
var cont=0;
while (clave != "utn750"){
  cont++;
  clave = prompt("ingrese la clave")
if(cont==3){
  alert("la clave es incorrecta");

  break;
}


}


}//FIN DE LA FUNCIÓN*/

{
  var clave;
  var cont=0;
  var error=false;

  do{
    clave=prompt("Ingrese la clave");
    cont++;

   if(cont==3){
    error=true;
    alert("contraseña incorrecta");
    break;

   }

  } while(clave != "utn750");

}

// https://1buenanuevas.wordpress.com/2011/08/28/3-estructuras-condicionales-if-for-while-do-while-switch/
