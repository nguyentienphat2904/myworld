const decreaseBT = document.getElementById("decreaseBT");
const resetBT = document.getElementById("resetBT");
const increaseBT = document.getElementById("increaseBT");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBT.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBT.onclick = function(){
    if (count > 0){
        count--;
        countLabel.textContent = count;
    }
}

resetBT.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}