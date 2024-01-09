const numOfDice = 3;
const diceImages = document.getElementById("diceImages");
const values = [];
const images = [];
const bet = [0, 0, 0, 0, 0, 0];
const roll = document.getElementById("roll");
const replayBT = document.getElementById("replay");

const bet1 = document.getElementById("bet1");
const bet2 = document.getElementById("bet2");
const bet3 = document.getElementById("bet3");
const bet4 = document.getElementById("bet4");
const bet5 = document.getElementById("bet5");
const bet6 = document.getElementById("bet6");

let money = 100;
let Money = document.getElementById("money");
let money1 = document.getElementById("money1");
let money2 = document.getElementById("money2");
let money3 = document.getElementById("money3");
let money4 = document.getElementById("money4");
let money5 = document.getElementById("money5");
let money6 = document.getElementById("money6");

function Beton1(){

    if (money <= 0){
        alert("You don not have enough money");
        return;
    }
    money -= 10;
    Money.textContent = "Money: " + money + "🧧";
    bet[0] += 10;
    money1.textContent = bet[0] + "🧧";
}

function Beton2(){

    if (money <= 0){
        alert("You don not have enough money");
        return;
    }
    money -= 10;
    Money.textContent = "Money: " + money  + "🧧";
    bet[1] += 10;
    money2.textContent = bet[1] + "🧧";
}

function Beton3(){

    if (money <= 0){
        alert("You don not have enough money");
        return;
    }
    money -= 10;
    Money.textContent = "Money: " + money + "🧧";
    bet[2] += 10;
    money3.textContent = bet[2] + "🧧";
}

function Beton4(){

    if (money <= 0){
        alert("You don not have enough money");
        return;
    }
    money -= 10;
    Money.textContent = "Money: " + money + "🧧";
    bet[3] += 10;
    money4.textContent = bet[3] + "🧧";
}

function Beton5(){

    if (money <= 0){
        alert("You don not have enough money");
        return;
    }
    money -= 10;
    Money.textContent = "Money: " + money + "🧧";
    bet[4] += 10;
    money5.textContent = bet[4] + "🧧";
}

function Beton6(){

    if (money <= 0){
        alert("You don not have enough money");
        return;
    }
    money -= 10;
    Money.textContent = "Money: " + money + "🧧";
    bet[5] += 10;
    money6.textContent = bet[5] + "🧧";
}

function rollDice(callBack){

    let count = 0;
    for (let i = 0; i < 6; i++){
        if (bet[i] > 0) count++;
    }
    if (count == 0){
        alert("You have to bet first");
        return;
    } 

    while(values.length > 0){
        values.pop();
    }
    while(images.length > 0){
        images.pop();
    }
    for (let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value)
        images.push(`<img src="dice_images/${value}.png">`);
    }
    diceImages.innerHTML = images.join('');

    roll.disabled = true;
    replayBT.disabled = false;
    bet1.disabled = true;
    bet2.disabled = true;
    bet3.disabled = true;
    bet4.disabled = true;
    bet5.disabled = true;
    bet6.disabled = true;

    checkResult();
}

function checkResult(){
    
    for (let i = 0; i < 3; i++){
        if (bet[values[i] - 1] > 0){
            money += (bet[values[i] - 1] * 2)
        }
    }

    if (money <= 0){
        alert("You lose all your money\nPlease press OK to play again");
        money = 100;
    }

    Money.textContent = "Money: " + money + "🧧";
}

function replay(){

    while(values.length > 0){
        values.pop();
    }

    while(images.length > 0){
        images.pop();
    }
    diceImages.innerHTML = images.splice();

    for (let i = 0; i < 6; i++){
        bet[i] = 0;
    }

    roll.disabled = false;
    replayBT.disabled = true;
    bet1.disabled = false;
    bet2.disabled = false;
    bet3.disabled = false;
    bet4.disabled = false;
    bet5.disabled = false;
    bet6.disabled = false;

    money1.textContent = "0🧧";
    money2.textContent = "0🧧";
    money3.textContent = "0🧧";
    money4.textContent = "0🧧";
    money5.textContent = "0🧧";
    money6.textContent = "0🧧";
}