function mostrar()
{

var sexo;

do{

   sexo = prompt("Ingrese un sexo");
   

}while (sexo != "f" && sexo != "m");


document.getElementById('Sexo').value= "El sexo: "+sexo+" es valido";

}//FIN DE LA FUNCIÓN