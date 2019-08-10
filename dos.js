function mostrar()
/*{
  var nombre;
  var peso;
  var tipo;
  var edad;
  var acumulador=0;
  var contador=0;

  while(contador <4){
    contador++;
  }

  do {

    tipo=prompt("ingrese un Tipo");

  }while (tipo != "perro" || tipo != "gato");
  {
    tipo=prompt("Error, Ingrese un tipo valido");
  }
  
  do {
       peso=prompt("ingrese un peso");
    
      }while (isNaN(peso) || peso <1 || peso >100);
      {
        tipo=prompt("Error, Ingrese un tipo valido");
      
      }
      

    

}*/
{
  
    var nombre;
    var peso;
    var tipo;
    var edad;
    var acumulador=0;
    var contador=0;

  while (contador < 4)
    contador++;

    tipo=prompt("Ingrese un tipo de animal");
    while (tipo != "perro" && tipo !="Gato")
    {
      tipo=prompt("Incorrecto, ingrese un tipo valido");
    }

    peso=prompt("Ingrese el peso");
    while ( peso < 1 || peso>100 )
    {
      peso=prompt("El peso es incorrecto, ingrese un valor entre 1 y 100");

    }


  
  
}