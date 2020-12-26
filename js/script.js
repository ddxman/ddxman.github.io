var conteinerForLSB = document.getElementById('conteinerForLSB');
var burger = document.getElementById('burger');
var advirstment = document.querySelector('Advirstment');
var mainContent = document.getElementById('MainContent');
var clientidth = document.documentElement.clientWidth;	


var clientidth = document.documentElement.clientWidth;	


 	 			
	burger.onclick=function(){
		

	if(conteinerForLSB.style.display =='none')
	{
		alert("Hello");
		main.style.gridTemplateColumns='2fr 4fr';
		conteinerForLSB.style.display='block';
		conteinerForLSB.style.gridColumnStart='1';
		MainContent.style.gridColumnStart='2';
		Advirstment.style.display ='none';
		

	}

	else if(conteinerForLSB.style.display =='block'){

		alert("Hello");
		main.style.gridTemplateColumns='4fr 1fr';
		conteinerForLSB.style.display ='none';	
		MainContent.style.gridColumnStart='1';
		Advirstment.style.display ='grid';
		Advirstment.style.gridColumnStart='2';
	}


	
};
