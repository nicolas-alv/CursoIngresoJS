function mostrar()
{
	//Genero el número RANDOM entre 1 y 10

  var examen;
  examen=Math.floor(Math.random() * (11-1)) +1;

  if (examen > 8 && examen < 11)
  {
     alert("Excelente: " + examen);
  }
  else if (examen > 3)
  {
    alert("Aprobo: " + examen);
  }
  else
  {
    alert("A tu casa pete: " + examen);
  }


}//FIN DE LA FUNCIÓN
