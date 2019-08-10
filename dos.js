

function mostrar()
{
    var tipo;
    var edad;
    var peso;
    var nombre;
    var contador=0 ;
    var acumulador=0;
    var edadmax;
    var nombremax;
    var primerdato=1;
    var contadoranimal=0;
    while(contador<4)
    {
        contador++;

        tipo=prompt("ingrece el tipo de mascota");
        while(tipo!="perro"&&tipo!="gato")
        {
          tipo=prompt(" error. no es una animal valido");
        }
       
        peso=prompt("ingrece la peso entre 1 y 100");
        while(isNaN(peso)==true||peso<1||peso>100 )
        {
          peso=prompt("ingrece la peso entre 1 y 100");

        }
        edad=prompt("ingrece el edad del animal");
        while(isNaN(edad)==true||edad<1||edad>25)
        {
          edad=prompt("error la edad teiene que estar entre 1 y 25");
        }
        nombre=prompt("ingrece el nombre de la mascota");
        
        peso=parseInt(peso);
        acumulador=acumulador+peso;
        
        if(tipo=="perro")
        {
         
         if(primerdato==1)
        {
           edadmax=edad;
           nombremax=nombre;
           primerdato=0;
        }
         if(edad>edadmax)
        {
           edadmax=edad;
           nombremax=nombre;
        }

        
        }
          if(edad>10&&peso<10)
         {
           contadoranimal++;
         }
    }
        alert( " el promedio es "+acumulador/4);

        alert("el pero mas viejo es "+nombremax+" tiene "+edadmax);
      
        alert("la cantidad de animales menores a 10 kilos y mayores de 10 años es "+ contadoranimal);
}
