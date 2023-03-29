var email_select=document.getElementById("email_select");
var email_last=document.getElementById("email_last")

email_select.onchange=function(){
    var val=email_select.value;

    switch(val){
        case "self":
            email_last.value=null
            email_last.disabled=false;
            break;
        case "naver":
            email_last.value="naver.com"
            email_last.disabled=true;
            break;
        case "daum":
            email_last.value="daum.net"
            email_last.disabled=true;
            break;
        case "gmail":
            email_last.value="gmail.com"
            email_last.disabled=true;
            break;
    }
}