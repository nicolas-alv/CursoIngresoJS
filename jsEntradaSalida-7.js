/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
    var num1=document.getElementById('numeroUno').value;
    var num2=document.getElementById('numeroDos').value;

    alert(parseInt(num1) + parseInt(num2));
}

function restar()
{
	  var num1=document.getElementById('numeroUno').value;
    var num2=document.getElementById('numeroDos').value;

    alert(parseInt(num1) - parseInt(num2));
}

function multiplicar()
{
	  var num1=document.getElementById('numeroUno').value;
    var num2=document.getElementById('numeroDos').value;

    alert(parseInt(num1) * parseInt(num2));
}

function dividir()
{
	var num1=document.getElementById('numeroUno').value;
    var num2=document.getElementById('numeroDos').value;

    alert(parseInt(num1) / parseInt(num2));
}

/*{ Suma:
    var num1;
    num1=document.getElementById('numeroUno').value;

    var num2
    num2=document.getElementById('numeroDos').value;

    num1=parseInt(num1);
    num2=parseInt(num2);

    alert(num1 + num2);
}*/

/*{ Resta
    var num1;
    num1=document.getElementById('numeroUno').value;

    var num2
    num2=document.getElementById('numeroDos').value;

    num1=parseInt(num1);
    num2=parseInt(num2);

    alert(num1 - num2);
}*/

/*{ Multiplicar
    var num1;
    num1=document.getElementById('numeroUno').value;

    var num2
    num2=document.getElementById('numeroDos').value;

    num1=parseInt(num1);
    num2=parseInt(num2);

    alert(num1 * num2);
}*/

/*{ Dividir
    var num1;
    num1=document.getElementById('numeroUno').value;

    var num2
    num2=document.getElementById('numeroDos').value;

    num1=parseInt(num1);
    num2=parseInt(num2);

    alert(num1 / num2);
}*/

