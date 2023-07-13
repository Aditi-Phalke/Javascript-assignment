function convertToRupees() {
    let dollar = document.getElementById("dollar");
    let rupees = dollar.value * 74.5
    document.getElementById("rupees").innerText = rupees
    let btn = document.getElementById("btn")
    btn.style.display = 'none'

}