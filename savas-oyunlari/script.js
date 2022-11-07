var x=10;
var z=10;

var askercan=120;

    
setInterval(uretme,5000);
function uretme(){
    var dusmanlar=document.createElement("li");
dusmanlar.style.width="150px"
dusmanlar.style.height="200px"
dusmanlar.style.position="absolute"
dusmanlar.style.top="20px"
dusmanlar.style.left=r+"px"
dusmanlar.innerHTML="<img src='düsmank kücük y.png'>";
dusmanlar.style.listStyleType="none"
var gorevler=document.getElementsByTagName("ul")[0];
gorevler.insertBefore(dusmanlar,gorevler.lastChild)

   
   
    
    
var r=1200;
var dur=setInterval(zaman,200);
function zaman(){
    window.onkeydown=function nrdedin(){
        var kod =event.keyCode;
        if(kod==13){
    document.getElementById("silahefek").style.display="block"}
    if (kod == 13) {
        
        var gorevler = document.getElementsByTagName("ul")[0];
        gorevler.removeChild(gorevler.getElementsByTagName('li')[0]);
        
        
    
    
    }


    if(kod==68){
        document.getElementById("askerkomple").style.left=x+"px"
    x=x+10}
    
    if(kod==65){
        document.getElementById("askerkomple").style.left=x+"px"
        x=x-10}
    
    if(kod==83){
        document.getElementById("askerkomple").style.top=z+"px"
        z=z+10}
    
    if(kod==87){
        document.getElementById("askerkomple").style.top=z+"px"
        z=z-10}
       
    
     }  


dusmanlar.style.left=r+"px";


 if(r==0){
clearInterval(dur)
setInterval(zaman2,1000);
function zaman2(){
document.getElementById("can").style.width=askercan+"px",
askercan=askercan-1
if(askercan==0){
 document.getElementById("askerkomple").style.display="none";}
}}
 else{r=r-5}}
}
    
   





//!silahın ucundan cıkan kırmızı kısım start burada dispilay block  oluyor
//aslında burada olay biraz sacma oldu daha sonra kontrol edileçektir 

    //!silahın ucundan cıkan kırmızı kısım stop




//!silahın ucundan cıkan kırmızı kısım start burada dispilay none oluyor
window.onkeyup=function efek(){
var kod =event.keyCode;
if(kod==13){
document.getElementById("silahefek").style.display="none"}}

//!silahın ucundan cıkan kırmızı kısım stop

