
document.getElementById("0").addEventListener("click",function(){ display(0); });
document.getElementById("1").addEventListener("click",function(){ display(1); });
document.getElementById("2").addEventListener("click",function(){ display(2); });
document.getElementById("3").addEventListener("click",function(){ display(3); });
document.getElementById("4").addEventListener("click",function(){ display(4); });
document.getElementById("5").addEventListener("click",function(){ display(5); });
document.getElementById("6").addEventListener("click",function(){ display(6); });
document.getElementById("7").addEventListener("click",function(){ display(7); });
document.getElementById("8").addEventListener("click",function(){ display(8); });
document.getElementById("9").addEventListener("click",function(){ display(9); });

document.getElementById("add").addEventListener("click",function(){ display('+'); });
document.getElementById("subtract").addEventListener("click",function(){ display('-'); });
document.getElementById("multiply").addEventListener("click",function(){ display('*'); });
document.getElementById("divide").addEventListener("click",function(){ display('/'); });

document.getElementById("clear").addEventListener("click",function(){blank(); });
document.getElementById("equal").addEventListener("click",function(){ result(); });



//function to display value 
function display(character){ 
	     document.getElementById("display").value+=character 
	} 

//function to clear the display 
function blank(){ 
	 document.getElementById("display").value = "" 
	} 

function result(){
             var a = document.getElementById("display").value 
             var b = eval(a) 
             document.getElementById("display").value = b 
         } 

