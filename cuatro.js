function mostrar()
{
 var num1;
 var num2;
 num1=prompt("Ingrese numero 1");
 num2=prompt("Ingrese numero 2");


 if (num1 == num2)
  {
    alert(num1+num2);
  }
 else            
  {
     if (!(num1 > num2))
     {
        alert(num1 / num2);
     }
    else 
     { if (num1 < num2)
        { 
          num1=parseInt(num1)
          num2=parseInt(num2)
          alert(num1+num2); 
        }
    
     }  
    
  }

}
