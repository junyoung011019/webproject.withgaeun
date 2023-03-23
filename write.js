var wy_button=document.getElementById("wy_button")

wy_button.onclick=function(){
    if(confirm("등록 하시겠습니까?")){
        alert("등록 되었습니다.")
        history.back()
    }else{
        return;
    }
}

var wc_button=document.getElementById("wc_button")

wc_button.onclick=function(){
    if(confirm("등록을 취소 하시겠습니까?")){
        history.back()
    }else{
        return;
    }
}