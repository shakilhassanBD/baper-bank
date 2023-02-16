//step number one click with event handler and btn.........
document.getElementById('submit-btn').addEventListener('click', function () {

    //step 2, get the email address write inside the input field.
    //always remember to use .value to get the value of input field.

    const emailAddress = document.getElementById('email');
    const email = emailAddress.value;
    // console.log(email);

    //step 3.. get the password
    const password = document.getElementById('password');
    const pass = password.value;
    // console.log(pass);

    //step 4, verify the password and email address....

    if(email === 'hasanshakil564@gmail.com' && pass === 'secretCSE'){
        window.location.href = 'bank-balance.html';
    }
    else{
        alert('invalid combination');
    }

})





