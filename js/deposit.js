function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


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