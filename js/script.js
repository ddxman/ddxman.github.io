	
var conteinerForLSB = document.getElementById("conteinerForLSB");
var burger = document.getElementById('burger');
var advirstment = document.getElementById("Advirstment");
var mainContent = document.getElementById('MainContent');

var clientidth = document.documentElement.clientWidth;	
		
	burger.onclick=function(){
	
	
	
		if(conteinerForLSB.style.display == "")
		{
			
			main.style.gridTemplateColumns='2.8fr 4fr';
			advirstment.style.display ="none";
			conteinerForLSB.style.gridColumnStart='1';
			conteinerForLSB.style.display='grid';
			mainContent.style.gridColumnStart='2';
			
		
			

		}
	
		else 
		
			{

			main.style.gridTemplateColumns='4fr 2.5fr';
			conteinerForLSB.style.display ="";	
			mainContent.style.gridColumnStart='1';
			advirstment.style.display ='grid';
			advirstment.style.gridColumnStart='2';
			
		}
		
	

	
};


	var k=0;
window.addEventListener("resize",function(){
	
	var width = window.innerWidth;
	
	if(width>702 && k==1)
	{
		main.style.gridTemplateColumns='2fr 3fr 2fr';
		conteinerForLSB.style.display='block';
		conteinerForLSB.style.gridColumnStart='1';
		MainContent.style.gridColumnStart='2';
		MainContent.style.gridTemplateRows= '0.5fr 3fr 5fr';
		Advirstment.style.display ='grid';
		Advirstment.style.gridColumnStart ='3';
		
	k=0;
	}
	else if(width<702 && k==0)
	{
		main.style.gridTemplateColumns=' 4fr 2.5fr';
		conteinerForLSB.style.display='none';
		
		Advirstment.style.display ='grid';
		MainContent.style.gridColumnStart='1';
		Advirstment.style.gridColumnStart='2';
	
		k=1;
	}
});
