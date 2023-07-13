function printTable(){
    let number=document.getElementById("number");
    for(let i=1; i<=10; i++){
        console.log(number.value * i);
        document.getElementById("table").innerHTML += number.value * i+ "<br>";
        let btn=document.getElementById("btn")
        btn.style.display = 'none'
    }
}