// console.log('please !! cheack your Amount..');
//  step - 1 deposite customise 
document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    // console.log(depositeField)
    const depositeValue =depositeField.value;
    const depositeAmount = parseFloat(depositeValue);
    // console.log(depositeAmount);

    const depositeTaka = document.getElementById('deposit-total');
    const depositeText = depositeTaka.innerText;
    const depositeParse = parseFloat(depositeText);

    const depositeAmountTaka  =depositeAmount + depositeParse;
    depositeTaka.innerText = depositeAmountTaka;


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = balanceTotal.innerText;
    const currentbalanceAmount =parseFloat(balanceTotalAmount);
    // console.log(currentbalanceAmount);

    const currentTotalBalance = depositeAmountTaka + currentbalanceAmount;
    // console.log(currentTotalBalance);
    balanceTotal.innerText = currentTotalBalance;
    depositeField.value = " ";
    
})

document.getElementById('btn-withdrow').addEventListener('click', function(){
    const withdrowField = document.getElementById('withdrow-field');
    const withdrowValue = withdrowField.value;
    const withdrowAmount = parseFloat(withdrowValue);
    // console.log(depositeAmount);

    const withdrowTaka = document.getElementById('withdrow-total');
    const withdrowText = withdrowTaka.innerText;
    const withdrowParse = parseFloat(withdrowText);

    const withdrowAmountTaka  =withdrowAmount + withdrowParse;
    withdrowTaka.innerText = withdrowAmountTaka;
    // step-5 total count 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = balanceTotal.innerText;
    const currentbalanceAmount =parseFloat(balanceTotalAmount);
    // console.log(currentbalanceAmount);

    const currentTotalBalance =currentbalanceAmount- withdrowAmountTaka ;
    // console.log(currentTotalBalance);
    balanceTotal.innerText = currentTotalBalance;
    withdrowField.value = " ";
})