var x=10;//?asker sola uzaklık
var z=10;//?asker yukarı uzaklık
var askercan=120;
var a=200;
var b=350;
var c=600;
var d=1000;
var e=1100;
var f=800;
var g=1300;
var h=1200;
var i=500;
var j=1600;
var k=1700;
var we=15;


  var bak=setInterval(geri,1000)
function geri(){
we=we-1
document.getElementById("say").innerHTML=we;
if(we==0){
    document.getElementById("bilgi").style.display="none"
    clearInterval(bak)
}
console.log(we)
}




    //?yönlendirme start
    window.onkeydown=function nrdedin(){
        var kod =event.keyCode;
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
       //?yönlendirme stop
      
     
      console.log(x)
      console.log(z)
       if(kod==13){
        document.getElementById("vur").play();
if(x<80){
    if(x>0){
        if(z<80){
            if(z>-50){
        document.getElementById("c1").style.display="none";
    } }}}

    if(x<250){
        if(x>90){
            if(z<640){
                if(z>460){
            document.getElementById("c2").style.display="none";
        } }}}

        if(x<480){
            if(x>300){
                if(z<360){
                    if(z>170){
                document.getElementById("c3").style.display="none";
            } }}}

            if(x<860){
                if(x>720){
                    if(z<260){
                        if(z>70){
                    document.getElementById("c4").style.display="none";
                } }}}

                if(x<1000){
                    if(x>820){
                        if(z<640){
                            if(z>400){
                        document.getElementById("c5").style.display="none";
                    } }}}

                    
                if(x<660){
                    if(x>500){
                        if(z<450){
                            if(z>270){
                        document.getElementById("c6").style.display="none";
                    } }}}

                    if(x<1170){
                        if(x>1030){
                            if(z<500){
                                if(z>330){
                            document.getElementById("c7").style.display="none";
                        } }}}

                        if(x<1100){
                            if(x>930){
                                if(z<160){
                                    if(z>-30){
                                document.getElementById("c8").style.display="none";
                            } }}}

                            if(x<400){
                                if(x>200){
                                    if(z<160){
                                        if(z>0){
                                    document.getElementById("c9").style.display="none";
                                } }}}

                                if(x<1470){
                                    if(x>1330){
                                        if(z<710){
                                            if(z>550){
                                        document.getElementById("c10").style.display="none";
                                    } }}}

                                    if(x<1550){
                                        if(x>1430){
                                            if(z<230){
                                                if(z>50){
                                            document.getElementById("c11").style.display="none";
                                        } }}}}




if(x<1930){
    if(x>1600){
        if(z<450){
            if(z>110){
                document.getElementById("kt").style.display="block";
                document.getElementById("adam_geldi").play();
              
              
              
    } }}}






if(x<80){
    if(x>0){
        if(z<80){
            if(z>-50){
               setInterval(zaman,100)
                function zaman(){
                  
                  a=a-1
            document.getElementById("c1").style.left=a+"px"
          
                }
              
    } }}}

    if(x<250){
        if(x>90){
            if(z<640){
                if(z>460){
                    setInterval(zaman,100)
                    function zaman(){
                      
                      b=b-1
                document.getElementById("c2").style.left=b+"px"
              
                    }
        } }}}

        if(x<480){
            if(x>300){
                if(z<360){
                    if(z>170){
                        setInterval(zaman,100)
                        function zaman(){
                          
                          c=c-1
                    document.getElementById("c3").style.left=c+"px"
                  
                        }
            } }}}

            if(x<860){
                if(x>720){
                    if(z<260){
                        if(z>70){
                            setInterval(zaman,100)
                            function zaman(){
                              
                              d=d-1
                        document.getElementById("c4").style.left=d+"px"
                      
                            }
                } }}}

                if(x<1000){
                    if(x>820){
                        if(z<640){
                            if(z>400){
                                setInterval(zaman,100)
                                function zaman(){
                                  
                                  e=e-1
                            document.getElementById("c5").style.left=e+"px"
                          
                                }
                    } }}}

                    
                if(x<660){
                    if(x>500){
                        if(z<450){
                            if(z>270){
                                setInterval(zaman,100)
                                function zaman(){
                                  
                                  f=f-1
                            document.getElementById("c6").style.left=f+"px"
                          
                                }
                    } }}}

                    if(x<1170){
                        if(x>1030){
                            if(z<500){
                                if(z>330){
                                    setInterval(zaman,100)
                                    function zaman(){
                                      
                                      g=g-1
                                document.getElementById("c7").style.left=g+"px"
                              
                                    };
                        } }}}

                        if(x<1100){
                            if(x>930){
                                if(z<160){
                                    if(z>-30){
                                        setInterval(zaman,100)
                                        function zaman(){
                                          
                                          h=h-1
                                    document.getElementById("c8").style.left=h+"px"
                                  
                                        }
                            } }}}

                            if(x<400){
                                if(x>200){
                                    if(z<160){
                                        if(z>0){
                                            setInterval(zaman,100)
                                            function zaman(){
                                              
                                              i=i-1
                                        document.getElementById("c9").style.left=i+"px"
                                      
                                            }
                                } }}}

                                if(x<1470){
                                    if(x>1330){
                                        if(z<710){
                                            if(z>550){
                                                setInterval(zaman,100)
                                                function zaman(){
                                                  
                                                  j=j-1
                                            document.getElementById("c10").style.left=j+"px"
                                          
                                                }
                                    } }}}

                                    if(x<1550){
                                        if(x>1430){
                                            if(z<230){
                                                if(z>50){
                                                    setInterval(zaman,100)
                                                    function zaman(){
                                                      
                                                      k=k-1
                                                document.getElementById("c11").style.left=k+"px"
                                              
                                                    }
                                        } }}}

         

//!silahın ucundan cıkan kırmızı kısım start burada dispilay block  oluyor 
if(kod==13){
    document.getElementById("arkaplan").play()
    document.getElementById("silahefek").style.display="block"}
    //!silahın ucundan cıkan kırmızı kısım stop

}
//!silahın ucundan cıkan kırmızı kısım start burada dispilay none oluyor
window.onkeyup=function efek(){
var kod =event.keyCode;
if(kod==13){
document.getElementById("silahefek").style.display="none"}}

//!silahın ucundan cıkan kırmızı kısım stop

function kurtar(){
    document.getElementById("demo").style.display="block"
    setInterval(kuru,5000)

    function kuru(){
        document.getElementById("kt").style.display="none";
        document.getElementById("demo").style.display="none"
    document.getElementById("hapis").style.display="none";
    document.getElementById("serbest").style.display="block";
}
}
