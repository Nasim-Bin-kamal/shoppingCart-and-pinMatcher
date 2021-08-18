function getPin() {
    const pinNumber = Math.round(Math.random() * 10000);
    const pinString = pinNumber + '';
    if(pinString.length == 4){
        return pinNumber;
    }
    else{
        return getPin();
    }
}
// handle generate pin
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
//handle click keypday buttons by event bubble.
document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayPin = document.getElementById('input-pin');
    if(isNaN(number)){
        if(number == 'C')
        displayPin.value = '';
    }
    else{
        const previousPin = displayPin.value;
        const newPin = previousPin + number;
        displayPin.value = newPin;
    }
});

function verifyPin() {
    const generatePin =document.getElementById('display-pin').value;
    const inputPin = document.getElementById('input-pin').value;
    const verifySuccess = document.getElementById('verify-success');
    const verifyFail = document.getElementById('verify-failed');

    if(generatePin === inputPin){
        verifySuccess.style.display = 'block';
        verifyFail.style.display = 'none';
    }
    else{
        verifySuccess.style.display = 'none';
        verifyFail.style.display = 'block';
    }
}