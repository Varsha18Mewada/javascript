  var num1=0;
	 var num2=0;

 function addBy(){
	 num1=document.getElementById("input1").value;
	 num2=document.getElementById("input2").value;
	 var result=num1+num2;
	 document.getElementById("push").onclick=function(){
	 alert("Addition is ="+result);}
 }
  
		
	
function subBy(){
	 
	 var  num1=document.getElementById("input1").value;
	 var   num2=document.getElementById("input2").value;
	 var  result=num1-num2;
	
	document.getElementById("push").onclick=function(){
	alert("Subtraction is ="+result);}
	}
  

  function multiplyBy(){
	 
	 var  num1=document.getElementById("input1").value;
	var   num2=document.getElementById("input2").value;
	 var  result=num1*num2;
	
	document.getElementById("push").onclick=function(){
	alert("Multiplication is ="+result);}
	}
function divisionBy(){
	 
	 var  num1=document.getElementById("input1").value;
	var   num2=document.getElementById("input2").value;
	 var  result=num1/num2;
	
	document.getElementById("push").onclick=function(){
		alert("Division is="+result);
	}
	}
