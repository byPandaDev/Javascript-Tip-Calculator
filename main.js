const billAmountInput = document.getElementById('billAmountInput')
const tipAmountInput = document.getElementById('tipAmountInput')
const tipAmount = document.getElementById('tipAmout')
const billAmount = document.getElementById('billAmount')


window.onload = () => {
    calcBill()
}

function calcBill() {
    var bill = billAmountInput.value
    var tip = tipAmountInput.value 

    document.getElementById('tipPercent').textContent = `${tip}%`

    var tipValue = bill * (tip/100)
    console.log('Tip: ' + tipValue)
    var finalBill = Number(bill) + Number(tipValue)
    console.log('Final Bill: ' + finalBill)

    tipAmount.value = Number(tipValue).toFixed(2)
    billAmount.value = Number(finalBill).toFixed(2)
}