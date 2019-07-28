function mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById("edad").value;

if (edad>17){
    alert("es adulto");
}
else if (edad>12 && edad<18) {
    alert("es un adolescente");
}
else {

    alert ("es un niño");
}


}//FIN DE LA FUNCIÓN