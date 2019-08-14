function mostrar()
/*{
    var lado1 = prompt("ingrese primer lado");
    var lado2 = prompt("ingrese segundo lado");
    var lado3 = prompt("Ingrese tercer lado");
  
  
    lado1 = parseInt(lado1);
    lado2 = parseInt(lado2);
    lado3 = parseInt(lado3);
  
    if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3) {
  
      alert("El perimetro es: " + (lado1 + lado2 + lado3));
  
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
  
      alert(lado1 + " " + lado2 + " " + lado3); 
    }
    else {
  
      alert("Es un triangulo isoseles");
    }
         

}*/

  /*Ejercicio 2 
  Debemos realizar la carga de cuatro mascotas de una veterinaria, de cada una debo obtener los siguientes datos: 
  I.El tipo (validar entre "perro" y "gato") 
  II.La edad (validar entre 1 y 25) 
  III.El peso (validar entre 1 y 100) 
  IV. El nombre 
  Se debe informar al usuario lo siguiente: 
  A)-El promedio de los pesos totales. 
  B)-El nombre del perro mas viejo. 
  C)-La cantidad de animales menores a 10 kilos de mas de 10 años. */

  {
    var tipo;
    var edad;
    var peso;
    var nombre;
    var contador=0;
    var acumuladorPesos=0;
    var edadPerroMasViejo=0;
    var nombrePerroMasViejo;
    var cantidadAnimalesMenores=0;
    

    while (contador < 4){

      tipo=prompt("Ingrese el tipo de mascota (Perro / Gato");

      if (tipo != "perro" && tipo != "gato"){

        alert("ERROR, ingreso incorrecto");

      }else {

        do {

          edad=prompt("Ingrese edad entre 1 y 25");
          edad=parseInt(edad);
  
        }while (isNaN(edad) || edad < 1 || edad >25);
  
        do {
  
          peso=prompt("Ingrese peso entre 1 y 100");
          peso=parseInt(peso);
  
        }while (isNaN(peso) || peso < 1 || peso > 100);
  
        nombre=prompt("Ingrese el nombre del animal");
    
        acumuladorPesos= acumuladorPesos + peso;

         
        if(tipo=="perro" && edad > edadPerroMasViejo){

          nombrePerroMasViejo=nombre;

        }

        if(peso < 10 && edad > 10){

          cantidadAnimalesMenores++;

        }


        contador++;
  

      }

      

    }


    alert("El promedio de los pesos totales es: " + (acumuladorPesos/4));
    alert("El nombre del perro mas viejo es: " + nombrePerroMasViejo);
    alert("Cantidad de animales menores a 10 kilos y mayores a 10 años: " + cantidadAnimalesMenores)

    

  }
  

