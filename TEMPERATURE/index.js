const textBox = document.getElementById("textbox");
const toFahranheit = document.getElementById("toFahranheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(){

    if (toFahranheit.checked) {
        temp = textBox.value;
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelcius.checked){
        temp = textBox.value;
        temp = 5 / 9 * (temp - 32);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }
}