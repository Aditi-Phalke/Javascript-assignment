function voteEligible(){
    let age=document.getElementById("age");
    if(age.value >= 18){
        document.getElementById("message").innerText= 'You are eligible to vote.'
    }
    else{
        document.getElementById("message").innerText= 'You are not eligible to vote yet.'
    }
}