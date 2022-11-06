
function but(){
    var inp =document.getElementById("inp");
    var yeniNOT=document.createElement("li");
    yeniNOT.innerHTML=inp.value;
    var gorevler=document.getElementsByTagName("ul")[0];
    gorevler.insertBefore(yeniNOT,gorevler.lastChild)

}

function buk(){
    var inpu =document.getElementById("inpu");
    var yeni2NOT=document.createElement("li");
    yeni2NOT.innerHTML=inpu.value;
    var gorevle=document.getElementsByTagName("ul")[1];
    gorevle.insertBefore(yeni2NOT,gorevle.lastChild)

}
var geriSayim = new Date("November 12,2022,23:43:20 ").getTime();
var x = setInterval(function(){

var simdiZaman = new Date().getTime();

var uzaklik = geriSayim - simdiZaman;
var gunler = Math.floor(uzaklik /(1000*60*60*24));
var saatler = Math.floor((uzaklik % (1000*60*60*24))/(1000*60*60));
var dakikalar = Math.floor((uzaklik % (1000*60*60)) / (1000*60));
var saniyeler = Math.floor(uzaklik % (1000*60) / 1000);
document.getElementById("sayim").innerHTML = gunler + " g " + saatler + " s " + dakikalar + " d " + saniyeler + " s ";
if (uzaklik<0){
 clearInterval(x);
 document.getElementById("sayim").innerHTML = "Geri Sayım Bitti";
}

},1000);

var buton=document.getElementsByClassName("akordisyon");
var ok=document.getElementsByClassName("fa-arrow-circle-down");

for(var i=0;i<buton.length;i++){
    buton[i].onclick=function(){
        var panel=this.nextElementSibling;
        
        console.log(panel)
        if(panel.style.maxHeight){
            panel.style.maxHeight=null
        }
    
    else{
        panel.style.maxHeight=this.scrollHeight+"px";
    }
}
}

    
