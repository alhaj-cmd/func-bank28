// console.log('withdrow')
document.getElementById('btn-withdrow').addEventListener('click', function(){
    // console.log('hello')
    const newWithdrowAmount = getInputFieldValueById('withdrow-field');
    const previousWithdrowTotal = getElementValueById('withdrow-total');
    // console.log(newDepositAmount,previousDepositTotal);

    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    setTextElementValueById('withdrow-total', newWithdrowTotal);
    //  get previous balance by using the function
    const previousBalanceTotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})