function mostrar()
// ||
{

  var num;
  num = prompt("ingrese un número entre 0 y 10.");
  while (num < 0 || num > 9 || isNaN(num)) {
    num = prompt("ingrese un numero");
    num = parseInt(num);

  }
  document.getElementById('Numero').value = num;

}//FIN DE LA FUNCIÓN


