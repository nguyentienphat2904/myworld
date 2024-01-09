const input = document.querySelector(".input");
const secondInput = document.querySelector(".secondInput");
const card = document.querySelector(".card");

const countLabel = document.getElementById("countLabel");
const resetBT = document.getElementById("resetBT");
const startBT = document.getElementById("startBT");
const stopBT = document.getElementById("stopBT");
const submit = document.getElementById("submit");

let second = 0;
let onCountDown = false;

function isNaturalNumber(value) {
    return /^\d+$/.test(value) && parseInt(value) > 0;
}

input.addEventListener("submit", event => {

    event.preventDefault();
    if (isNaN(secondInput.value) || !isNaturalNumber(secondInput.value)){
        alert("Enter an natural number please");
        secondInput.value = "";
        return;
    }
    
    second = parseInt(secondInput.value);
    submit.disabled = true;
    displaySecond(second);
});

function displaySecond(second){

    countLabel.textContent = second;
}

resetBT.onclick = function(){

    if (onCountDown) return;
    secondInput.value = "";
    second = 0;
    onCountDown = false;
    startBT.disabled = false;
    stopBT.disabled = false;
    resetBT.disabled = false;
    submit.disabled = false;
    displaySecond(second);
}

startBT.onclick = function(){

    if (second == 0) return;
    onCountDown = true;
    startBT.disabled = true;
    stopBT.disabled = false;

    function countDown(){
        if (second >= 0 && onCountDown){
            displaySecond(second);
            setTimeout(function () {
                second--;
                countDown();
            }, 1000);
        }
        else if (!onCountDown){
            startBT.disabled = false;
            stopBT.disabled = true;
        }
        else{
            alert("Time's up");
            second = 0;
            onCountDown = false;
            startBT.disabled = false;
            stopBT.disabled = false;
            resetBT.disabled = false;
            submit.disabled = false;
        }
    }

    countDown();

}

stopBT.onclick = function(){

    if (second == 0) return;
    onCountDown = false;
    stopBT.disabled = true;
    startBT.disabled = false;
    resetBT.disabled = false;
}