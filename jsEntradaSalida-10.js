/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	  var importe=document.getElementById('importe').value;
    var resultado;
    importe=parseInt(importe);
    resultado=parseInt(resultado);

    resultado= (importe - ((25*importe)/100));
    document.getElementById('resultado').value= resultado;
}
