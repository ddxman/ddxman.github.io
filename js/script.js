var conteinerForLSB = document.getElementById('conteinerForLSB');
var burger = document.getElementById('burger');
var advirstment = document.querySelector('Advirstment');
var mainContent = document.getElementById('MainContent');
var clientidth = document.documentElement.clientWidth;	

if(clientidth<702)
{
	main.style.gridTemplateColumns ='4fr 1fr';
	conteinerForLSB.style.display='none';
	Advirstment.style.display ='grid';
	MainContent.style.gridColumnStart='1';
	Advirstment.style.gridColumnStart='2';

}

	window.addEventListener("resize",function(){
	var width = window.innerWidth;
	
	if(width>702 )
	{
		main.style.gridTemplateColumns='2fr 3fr 2fr';
		conteinerForLSB.style.display='block';
		conteinerForLSB.style.gridColumnStart='1';
		MainContent.style.gridColumnStart='2';
		Advirstment.style.display ='grid';
		Advirstment.style.gridColumnStart ='3';
		

	}
	else if(width<702)
	{
		main.style.gridTemplateColumns=' 4fr 1fr';
		conteinerForLSB.style.display='none';
		Advirstment.style.display ='grid';
		MainContent.style.gridColumnStart='1';

		Advirstment.style.gridColumnStart='2';


	}
});
 	 			
	burger.onclick=function(){
		

	if(conteinerForLSB.style.display =='none')
	{
		main.style.gridTemplateColumns='2fr 4fr';
		conteinerForLSB.style.display='block';
		conteinerForLSB.style.gridColumnStart='1';
		MainContent.style.gridColumnStart='2';
		Advirstment.style.display ='none';
		

	}

	else if(conteinerForLSB.style.display =='block'){


		main.style.gridTemplateColumns='4fr 1fr';
		conteinerForLSB.style.display ='none';	
		MainContent.style.gridColumnStart='1';
		Advirstment.style.display ='grid';
		Advirstment.style.gridColumnStart='2';
	}


	
};
