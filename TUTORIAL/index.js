let c;
let r;

document.getElementById("mySubmit").onclick = function(){
    r = Number(document.getElementById("myText").value);
    c = 2 * Math.PI * r;
    document.getElementById("result").textContent = String(c) + " cm";
    console.log(r);
}