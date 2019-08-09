
function mostrar()

{
  debugger;
  var cateto1;
  var cateto2;
  var cateto3;
  var perimetro;
  cateto1=prompt("Ingrese primer cateto");

  cateto2=prompt("Ingrese segundo cateto");

  cateto3=prompt("Ingrese tercer cateto");


  if(cateto1 !== cateto2&&cateto2 !== cateto3){

    alert(cateto1+cateto2+cateto3);


  }else if(cateto1 == cateto2 && cateto2 == cateto3);
  {
    cateto1=parseInt(cateto1);
    cateto2=parseInt(cateto2);
    cateto3=parseInt(cateto3);

    perimetro=(cateto1+cateto2+cateto3)
    alert(perimetro);

  }



}
