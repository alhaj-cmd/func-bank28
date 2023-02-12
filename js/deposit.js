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


document.getElementById('btn-deposite').addEventListener('click', function(){
    // console.log('hello')
    const newDepositAmount = getInputFieldValueById('deposit-field');
})