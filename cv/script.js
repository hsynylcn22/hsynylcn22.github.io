window.onkeydown=function tabanca(){
    var kod=event.keyCode;
    if(kod==68){
        document.getElementById("silah").style.left=x+"px";
        x=x+15
    }
    if(kod==65){
        document.getElementById("silah").style.left=x+"px";
        x=x-15
    }
    if(x<-10==x>20){
        document.getElementById("b").style.color="black";
    }
    else{
        document.getElementById("b").style.color="#CFDEF3";
    }
    if(x<30==x>50){
        document.getElementById("e").style.color="black";
    }
    else{
        document.getElementById("e").style.color="#CFDEF3";
    }
    if(x<60==x>80){
        document.getElementById("n").style.color="black";
    }
    else{
        document.getElementById("n").style.color="#CFDEF3";
    }
    if(x<90==x>110){
        document.getElementById("i").style.color="black";
    }
    else{
        document.getElementById("i").style.color="#CFDEF3";
    }
    if(x<150==x>180){
        document.getElementById("ii").style.color="black";
    }
    else{
        document.getElementById("ii").style.color="#CFDEF3";
    }
    if(x<195==x>210){
        document.getElementById("s").style.color="black";
    }
    else{
        document.getElementById("s").style.color="#CFDEF3";
    }

    if(x<215==x>255){
        document.getElementById("ee").style.color="black";
    }
    else{
        document.getElementById("ee").style.color="#CFDEF3";
    }
    if(x<360==x>390){
        document.getElementById("a").style.color="black";
    }
    else{
        document.getElementById("a").style.color="#CFDEF3";
    }

    if(x<400==x>430){
        document.getElementById("l").style.color="black";
    }
    else{
        document.getElementById("l").style.color="#CFDEF3";
    }

}


var x=20;