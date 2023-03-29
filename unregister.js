var unregister_button=document.getElementById("unregister_button")

unregister_button.onclick=function(){
    if(confirm("정말 탈퇴하시겠습니까?")){
        location.href=("end.html")
    }else{
        return;
    }
}