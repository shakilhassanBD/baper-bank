//bank-balance code is here......................

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input');
    const depositAmount = depositField.value;

    const currentDeposit = document.getElementById('deposit');
    const totalDeposit = currentDeposit.innerText;
    currentDeposit.innerText = parseFloat(depositAmount) + parseFloat(totalDeposit);


    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText;
    const previousBalanceAmount = parseFloat(balanceAmount);

    const newBalanceAmount = previousBalanceAmount + parseFloat(depositAmount);
    balance.innerText = newBalanceAmount;


    depositField.value = '';

});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withDrawField = document.getElementById('withdraw-input');
    const withDrawAmount = withDrawField.value;

    const WithDraw = document.getElementById('Withdraw');
    const previousWithdraw = WithDraw.innerText;

    WithDraw.innerText = parseFloat(previousWithdraw) + parseFloat(withDrawAmount);

    const newTotalBalance = document.getElementById('balance');
    const newBalance = newTotalBalance.innerText;

    newTotalBalance.innerText = parseFloat(newBalance) - parseFloat(withDrawAmount);
    


    withDrawField.value = '';

});