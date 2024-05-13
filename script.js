 let displayScreen = document.getElementById("screenvalue");

 function display(num){
    displayScreen.value += num;
 }  

 function calculate( ) {
   try{
      displayScreen.value = eval(displayScreen.value)
   }
   catch(err)
   {
      alert("Invalit Input")
   }
 }

 function Clear (){
   displayScreen.value = "";

 }

 function del (){
   displayScreen.value = displayScreen.value.slice(0,-1)

 }