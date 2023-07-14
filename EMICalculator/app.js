function calculateEMI() {
    let amount = document.getElementById('amount')
    let month = document.getElementById('month')
    let rate = document.getElementById('rate')
    const interset = (amount.value * (rate.value * 0.01)) / month.value
    let EMI = ((amount.value / month.value) + interset).toFixed(2)
    document.getElementById('EMI').innerText = "EMI = " + EMI
}