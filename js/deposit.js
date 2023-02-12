function getInputFieldValueById(inputId){
    const inputField = document.getElementById('deposite-field');
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}


document.getElementById('btn-deposite').addEventListener('click', function(){
    console.log('hello')
})