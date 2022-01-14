
    //pide una nota por prompt y la guarda en la variable nota
    var nombre = prompt("Cual es tu nombre?");


  





function convertir() {
 var valore = parseInt(document.getElementById("valor").value );
 var resultado =0;
 var Dolar=209.50;
 var Euro=234.50;
 var Reales=18.75;
 if(document.getElementById("Uno").checked){
resultado=valore / Dolar;
alert(nombre +" el cambio de Pesos a Dolares es :$" + resultado.toFixed(2))

 }
 else if(document.getElementById("dos").checked){

    resultado=valore/ Euro;
    alert(nombre +" El cambio de Pesos a Euros es $"+ resultado.toFixed(2));

 }

 else if(document.getElementById("tres").checked){

    resultado=valore/ Reales;
    alert(nombre +" El cambio de Pesos a Reales es $"+ resultado.toFixed(2));

 }


 else {

    alert(nombre +" Tienes que completar todos los requerimientos")



 }

}