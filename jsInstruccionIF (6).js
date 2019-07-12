function mostrar()
{
//tomo la edad
var edad;
edad=document.getElementById('edad').value;
if (edad>17)
{
   alert("Es adulto");
}
else if (edad >= 13 && edad <= 17)
{
   alert("Es adolescente");
}
else
{
   alert("es un niño");
}


}//FIN DE LA FUNCIÓN
