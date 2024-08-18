// diposit dection 
function inputField(Input){
    const inputField = document.getElementById(Input);
    const inputFieldString = inputField.value ;
    const inputFieldNumber = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldNumber;
}

function OutputField (Diposit){
    const outputvalue = document.getElementById(Diposit);
    const outputvalueString = outputvalue.innerText;
    const outputvalueNumber = parseFloat(outputvalueString);

    return outputvalueNumber;
}
function setValue(Diposit,newValue){
    const outputvalue = document.getElementById(Diposit);
    outputvalue.innerText = newValue;
}



document.getElementById("dipo-btn").addEventListener('click',function(){
    const inputValue = inputField("diposit-input");
   
    const DipositOutput = OutputField ("Dolar-field");
    const previousDiposit = DipositOutput + inputValue;
    setValue("Dolar-field",previousDiposit) ;

    const BalanceOutput = OutputField ("balance-input" );
    const previousBalance = BalanceOutput+ inputValue;
    setValue("balance-input",previousBalance);
})