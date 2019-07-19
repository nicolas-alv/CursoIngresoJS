function mostrar()
{

  var num;
  var suma=0;
  var multiplicacion=1;

  while(confirm("")){
    do{
      num=prompt("");
      num=parseInt(num);
    }while (isNaN(num));
  }
  if (num >=0){
    suma += num;
  }else {
    multiplicacion*=num;
  }

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
