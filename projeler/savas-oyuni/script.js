
var askeruzaklik=10;
var askeryukseklik=10;
var askercan=120;
var i = 0

var x1 = 1200;
var x1tp = 200;
var tp=0;
var x0 = 1200;
var x2tp=20;
var x2 = 1200;
var x3tp=400;
var x3 = 1200;





var uret=setInterval(uretme,5000)
function uretme(){

    document.getElementById("komple").innerHTML += 
    `<div id=${i}  style="width: 150px; left:1200px; height: 200px; position: absolute;  list-style-type: none;"><img src='düsmank kücük y.png'></img>  </div>`;i=i+1;
    

if(i==3){clearInterval(uret)} 
}


//! ********************************
var dur=setInterval(zaman,200);
function zaman(){
document.getElementById("0").style.left=x0+"px";
document.getElementById("0").style.top=tp+"px";
 if(x0==0){clearInterval(dur)}
 else{x0=x0-5}




}

//! ********************************


var dur1=setInterval(zaman1,200);
function zaman1(){
    document.getElementById("1").style.left=x1+"px";
    document.getElementById("1").style.top=x1tp+"px"; 
    if(x1==0){clearInterval(dur1)}
    else{x1=x1-5}
}

//! ********************************

var dur2=setInterval(zaman2,200);
function zaman2(){
    document.getElementById("2").style.left=x2+"px";
    document.getElementById("2").style.top=x2tp+"px"; 
    if(x2==0){clearInterval(dur2)}
    else{x2=x2-5}}

//! ********************************
var dur3=setInterval(zaman3,200);
function zaman3(){
    document.getElementById("3").style.left=x3+"px";
    document.getElementById("3").style.top=x3tp+"px"; 
    if(x3==0){clearInterval(dur3)}
    else{x3=x3-5}}

//! ********************************
   
window.onkeydown=function yonlendirme(){ 
    var kod =event.keyCode;
   
 
//! ********************************
 var bu=x0-300;
 var zu=tp+100;
 var zj=tp-30;
if(kod==13){
    if(askeruzaklik<x0){
        if(askeruzaklik>bu){
            if(zj<askeryukseklik){
                if(zu>askeryukseklik){
        $("#0").css("display","none");
        }}}}}
//! ********************************

        var bu1=x1-300;
        var zu1=x1tp+100;
        var zj1=x1tp-30;
       if(kod==13){
           if(askeruzaklik<x1){
               if(askeruzaklik>bu1){
                   if(zj1<askeryukseklik){
                       if(zu1>askeryukseklik){
               $("#1").css("display","none");
               }}}}}
//! ********************************
var bu2=x2-300;
var zu2=x2tp+100;
var zj2=x2tp-30;
if(kod==13){
   if(askeruzaklik<x2){
       if(askeruzaklik>bu2){
           if(zj2<askeryukseklik){
               if(zu2>askeryukseklik){
       $("#2").css("display","none");
       }}}}}
//! ********************************
var bu3=x3-300;
var zu3=x3tp+100;
var zj3=x3tp-30;
if(kod==13){
   if(askeruzaklik<x3){
       if(askeruzaklik>bu3){
           if(zj3<askeryukseklik){
               if(zu3>askeryukseklik){
       $("#3").css("display","none");
       }}}}}
//! ********************************

//!silahın ucundan cıkan kırmızı kısım start burada dispilay block  oluyor

if (kod == 13) {
    document.getElementById("afjrtngj").play()
 document.getElementById("silahefek").style.display = "block";
}
    //!silahın ucundan cıkan kırmızı kısım stop
 
  
 //?yönlendirme kısmı start
 if(kod==68){
    document.getElementById("askerkomple").style.left=askeruzaklik+"px"
askeruzaklik=askeruzaklik+10}
if(kod==65){
    document.getElementById("askerkomple").style.left=askeruzaklik+"px"
    askeruzaklik=askeruzaklik-10}

if(kod==83){
    document.getElementById("askerkomple").style.top=askeryukseklik+"px"
    askeryukseklik=askeryukseklik+10}

if(kod==87){
    document.getElementById("askerkomple").style.top=askeryukseklik+"px"
    askeryukseklik=askeryukseklik-10}
 //?yönlendirme kısmı stop
}



//!silahın ucundan cıkan kırmızı kısım start burada dispilay none oluyor
window.onkeyup=function efek(){
var kod =event.keyCode;
if(kod==13){
document.getElementById("silahefek").style.display="none"}

}

//!silahın ucundan cıkan kırmızı kısım stop

