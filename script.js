
function main (){
	//let numbers = [0,1,2,3,4,5,6,7,8,9];
	for (let i=0; i<10; i++) {
	//for (let i=0; i<numbers.length; i++) 
		document.getElementById(i).addEventListener("click",function(){ display(i); });
	}
	
	document.getElementById("add").addEventListener("click",function(){ display('+'); });
	document.getElementById("subtract").addEventListener("click",function(){ display('-'); });
	document.getElementById("multiply").addEventListener("click",function(){ display('*'); });
	document.getElementById("divide").addEventListener("click",function(){ display('/'); });
	document.getElementById("clear").addEventListener("click",function(){blank(); });
	document.getElementById("equal").addEventListener("click",function(){ result(); });
	}









//function to display value 
function display(character){ 
	if (isResult) {
		blank();
		isResult = false;
	} 
	  document.getElementById("display").value+=character;
	} 

//function to clear the display 

function blank(){ 
	 document.getElementById("display").value = "";
} 


//let = isResult = false; // if I use let it has to be here because it's inside the scope of that function

function result(){
 var a = document.getElementById("display").value 
 var b = eval(a) 
 document.getElementById("display").value = b;
 isResult = true; 
}

var isResult = false; //global and JS reads throughut the whole document 



main();



