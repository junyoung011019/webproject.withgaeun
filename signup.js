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

var signup_button=document.getElementById("signup_button");
var pw=document.getElementById("pw").value;
var pw_check=document.getElementById("pw_check").value;
var input_name=document.getElementById("name").value;
var call_front=document.getElementById("call_front").value;
var call_middle=document.getElementById("call_middle").value;
var call_last=document.getElementById("call_last").value;
var email_front=document.getElementById("email_front").value;
var email_last=document.getElementById("email_last").value;
var nickname=document.getElementById("nickname").value;

signup_button.onclick=function(){

    const condition1= pw.length<=8;
    const condition2=pw!==pw_check;
    const condition3=input_name=="";
    const condition4=call_front=="" || call_middle=="" || call_last=="";
    const condition5=email_front=="" || email_last=="";
    const condition6=nickname=="";

    // 아이디 중복확인 만들기
    if(!condition1){
        alert('비밀번호는 최소 8글자 이상 사용하세요.')
    }
    if(condition2){
        alert('비밀번호가 일치하지 않습니다.')
    }
    if(condition3){
        alert('이름을 입력해주세요.')
    }
    if(condition4){
        alert('전화번호를 입력해주세요.')
    }
    if(condition5){
        alert('이메일을 입력해주세요.')
    }
    if(condition6){
        alert('닉네임을 입력해주세요.')
    }

    if(condition1 && !condition2 && !condition3 && !condition4 && !condition5 && !condition6){
        alert('회원가입이 완료되었습니다.')
    }
}