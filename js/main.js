


//alert("Hey Eliani!");
document.getElementById('outPut').style.visibility='hidden';
document.getElementById('kgInput').addEventListener('input',function(e){
document.getElementById('outPut').style.visibility='visible';
let kgs=e.target.value;
document.getElementById('gramsOutput').innerHTML=kgs*1000;
document.getElementById('lbOutput').innerHTML=kgs*2.2046;
document.getElementById('ozOutput').innerHTML=kgs/0.0283;
document.getElementById('tnOutput').innerHTML=kgs/1000;
	

})