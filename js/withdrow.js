
document.getElementById("withdrow-btn").addEventListener('click',function(){
    const inputValue = inputField("withdrow-input");

    const withdrowOutput = OutputField ("withdrow-output");
    const previousWithdrow = withdrowOutput + inputValue ;
    setValue("withdrow-output",previousWithdrow) ;

    const BalanceOutput = OutputField ("balance-input");
    const previousBalance = BalanceOutput -inputValue;
    setValue("balance-input",previousBalance);

})