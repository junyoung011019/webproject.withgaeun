var wy_button=document.getElementById("wy_button")

wy_button.onclick=function(){
    if(confirm("등록하시겠습니까?")){
        alert("등록되었습니다.")
        location.href="marketmenu.html"
    }else{
        return;
    }
}