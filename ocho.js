function mostrar()
/*Realizar el algoritmo que permita ingresar el nombre de una localidad (I), cantidad de habitantes en millones entre 1 y 40 (validar) (II), la temperatura minima que se registra 
en esa localidad (entre -50 y 50) hasta que el usuario quiera (III) e informar al terminar el ingreso por document.write: 
A)- La cantidad de temperaturas pares. 
B)- El nombre de la localidad con menos habitantes. 
C)- La cantidad de localidades que superen los 40 grados de temperatura. 
D)- El promedio de habitantes entre las localidades ingresadas. 
E)- La temperatura minima ingresada, y el nombre de la localidad que registro esa temperatura.
*/

{
    
    var localidad;
    var habitantes;
    var temperatura;
    var contador=0;
    var cantidadTempPares=0;
    var localidadMenosHabitantes;
    var localidades40grados=0;
    var totalDeHabitantes=0;
    var tempMinima;
    var localidadTempMinima;
    
    
    while(contador != null){

        localidad=prompt("Ingrese el nombre de una localidad");

        if (localidad==null){

            break;
        }

        if(!isNaN(localidad)) {

            alert("Localidad invalida");

        } else { 
        
            do {

                habitantes = prompt("ingrese cantidad de habitantes", "millones");
                habitantes = parseInt(habitantes);

            } while (isNaN(habitantes) || habitantes < 1 || habitantes > 40);

            totalDeHabitantes = totalDeHabitantes + habitantes;

            do {

                temperatura = prompt("Ingrese temperatura");
                temperatura = parseInt(temperatura);


            } while (isNaN(temperatura) || temperatura < -50 || temperatura > 50);

            if (temperatura % 2 == 0 && temperatura != 0) {

                cantidadTempPares++;

            }

            if (habitantes < localidadMenosHabitantes || !localidadMenosHabitantes) {

                localidadMenosHabitantes = localidad;

            }

            if (temperatura > 40) {
                localidades40grados++;
            }

            if (temperatura < tempMinima || !tempMinima) {
                tempMinima = temperatura;
                localidadTempMinima = localidad;
            }
        
        } 
        
        contador++;

    }

    alert("Cantidad de temperaturas pares: " + cantidadTempPares);
    alert("Localidad con menos habitantes: " + localidadMenosHabitantes);
    alert("Cantidad de localidades con mas de 40º: " + localidades40grados);
    alert("Promedio de habitantes: " + (totalDeHabitantes / contador));
    alert("Temperatura minima ingresada y localidad: " + tempMinima + " (" + localidadTempMinima + ")");
}
