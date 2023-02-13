

document.getElementById('btn-deposite').addEventListener('click', function(){
    // console.log('hello')
    const newDepositAmount = getInputFieldValueById('deposite-field');
    const previousDepositTotal = getElementValueById('deposit-total');
    // console.log(newDepositAmount,previousDepositTotal);

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);
    //  get previous balance by using the function
    const previousBalanceTotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})