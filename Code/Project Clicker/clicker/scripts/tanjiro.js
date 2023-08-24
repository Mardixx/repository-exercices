console.log("Main.js Connected")
let money = 0;
let tanjiroHP = 10;
let dPoint = 1;
let nbofupgrades = 0;
let nbofupgrades2 = 0;
let i = 0
let nbofkills = 0
let currenthealth = 100;


function scaledown() {
    document.getElementById("enemies").style.transform = "scale(0.9)";
}
function upscale() {
    document.getElementById("enemies").style.transform = "scale(1)";
}
function moneyadd() {
    if (tanjiroHP <= 0)
        money += 5;
    document.getElementById("moneycount").innerHTML = ": " + money;
};
function updateHealthBar(healthPercentage){
    const healthBar = document.querySelector(".hp");
    healthBar.style.width = `${healthPercentage}%`;
}
function decreaseHealth(){
    if(currenthealth > 0) {
        tanjiroHP -= dPoint;
        currenthealth -= 10 * dPoint;
        updateHealthBar(currenthealth);
    }
    if(currenthealth <= 10){
        currenthealth = 110;
    }
}
function dead(){
    if(tanjiroHP <= 0)   
        tanjiroHP = 10;
    document.getElementById("health").innerHTML = tanjiroHP;
}
// function healthDown() {
//     tanjiroHP -= dPoint
//     if (tanjiroHP == 0)
//         tanjiroHP = 10;
//     document.getElementById("health").innerHTML = tanjiroHP;
// };
// setInterval(hpdown, 0);
// function hpdown() {
//         if (tanjiroHP == 0)
//             document.getElementById("hp").style.height = "0.5rem"
//         else if (tanjiroHP == 1)
//             document.getElementById("hp").style.height = "2.5rem"
//         else if (tanjiroHP == 2)
//             document.getElementById("hp").style.height = "4rem"
//         else if (tanjiroHP == 3)
//             document.getElementById("hp").style.height = "5.5rem"
//         else if (tanjiroHP == 4)
//             document.getElementById("hp").style.height = "7rem"
//         else if (tanjiroHP == 5)
//             document.getElementById("hp").style.height = "8.5rem"
//         else if (tanjiroHP == 6)
//             document.getElementById("hp").style.height = "9rem"
//         else if (tanjiroHP == 7)
//             document.getElementById("hp").style.height = "10.5rem"
//         else if (tanjiroHP == 8)
//             document.getElementById("hp").style.height = "12rem"
//         else if (tanjiroHP == 9)
//             document.getElementById("hp").style.height = "13.5rem"
//         else if (tanjiroHP == 10)
//             document.getElementById("hp").style.height = "15rem"
// }

