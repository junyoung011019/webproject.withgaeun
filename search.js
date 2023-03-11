var b1=document.getElementById("b1")
var b2=document.getElementById("b2")
var b3=document.getElementById("b3")

b1.onclick=function(){
    document.getElementById("b1i").src="images/식당 1.png";
    document.getElementById("b2i").src="images/관광지 0.png";
    document.getElementById("b3i").src="images/카페 0.png";
    document.getElementById("T1").style.color="black";
    document.getElementById("T2").style.color="#D3D3D3";
    document.getElementById("T3").style.color="#D3D3D3";
    document.getElementById("mb").disabled=false;
    document.getElementById("nb").disabled=false;
}
b2.onclick=function(){
    document.getElementById("b1i").src="images/식당 0.png";
    document.getElementById("b2i").src="images/관광지 1.png";
    document.getElementById("b3i").src="images/카페 0.png";
    document.getElementById("T1").style.color="#D3D3D3";
    document.getElementById("T2").style.color="black";
    document.getElementById("T3").style.color="#D3D3D3";
    document.getElementById("mb").disabled=false;
    document.getElementById("nb").disabled=false;
}
b3.onclick=function(){
    document.getElementById("b1i").src="images/식당 0.png";
    document.getElementById("b2i").src="images/관광지 0.png";
    document.getElementById("b3i").src="images/카페 1.png";
    document.getElementById("T1").style.color="#D3D3D3";
    document.getElementById("T2").style.color="#D3D3D3";
    document.getElementById("T3").style.color="black";
    document.getElementById("mb").disabled=false;
    document.getElementById("nb").disabled=false;
}