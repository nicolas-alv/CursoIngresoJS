function mostrar()
{
//tomo la edad
var edad;
edad=document.getElementById('edad').value;

if(!(edad>=13 && edad<=17)){
  alert("no es adolescente");
}

}//FIN DE LA FUNCIÓN


/*{
  var edad;
  edad=document.getElementById('edad').value;
  if (edad>12 || edad<18 );{
    alert("no es adolescente");
  }
}*/
