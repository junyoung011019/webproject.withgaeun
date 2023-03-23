const heart_button=document.getElementById("heart_button")
const heart=document.getElementById("heart")

heart_button.onclick=function(){
    if(heart.alt==="하트0"){
        heart.src="images/하트버튼 1.png"
        heart.alt="하트1"
    }else{
        heart.src="images/하트버튼 0.png"
        heart.alt="하트0"
    }
}