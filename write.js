var write_title=document.getElementById("write_title")

write_title.onfocus=function(){
    write_title.value=null
}

var review=document.getElementById("review")

review.onfocus=function(){
    review.value=null
}

var write_okay_button=document.getElementById("write_okay_button")

write_okay_button.onclick=function(){
    if(confirm("등록 하시겠습니까?")){
        alert("등록 되었습니다.")
        history.back()
    }else{
        return;
    }
}

var write_cancel_button=document.getElementById("write_cancel_button")

write_cancel_button.onclick=function(){
    if(confirm("등록을 취소 하시겠습니까?")){
        history.back()
    }else{
        return;
    }
}

