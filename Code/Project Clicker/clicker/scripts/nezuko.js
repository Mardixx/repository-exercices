let nezukoHP = 20;
let money2 = 0;
currenthealth2 = 200;


function scaledown2() {
    document.getElementById("enemies2").style.transform = "scale(0.9)";
}
function upscale2() {
    document.getElementById("enemies2").style.transform = "scale(1)";
}
function moneyadd2() {
    if (nezukoHP == 20)
        money += 5;
    document.getElementById("moneycount").innerHTML = ": " + money;
};
function updateHealthBar2(healthPercentage){
    const healthBar = document.querySelector("#hp2");
    healthBar.style.width = `${healthPercentage}%`;
}
function decreaseHealth2(){
    if (currenthealth2 > 0) {
        nezukoHP -= dPoint;
        currenthealth2 -= 10 * dPoint;
        updateHealthBar2(nezukoHP);
    if (currenthealth2 <= 10)
        currenthealth2 = 210;
    }
}
function dead2(){
    if(nezukoHP <= 0)   
        nezukoHP = 20;
    document.getElementById("health2").innerHTML = nezukoHP;
}
// function healthDown2() {
//     nezukoHP -= dPoint
//     if (nezukoHP == 0)
//         nezukoHP = 20;
//     document.getElementById("health2").innerHTML = nezukoHP;
// };
// setInterval(hpdown2, 0);
// function hpdown2() {
//         if (nezukoHP == 20)
//             document.getElementById("nohealth2").style.height = "0rem"
//         else if (nezukoHP == 19)
//             document.getElementById("nohealth2").style.height = "1rem"
//         else if (nezukoHP == 18)
//             document.getElementById("nohealth2").style.height = "2rem"
//         else if (nezukoHP == 17)
//             document.getElementById("nohealth2").style.height = "3rem"
//         else if (nezukoHP == 16)
//             document.getElementById("nohealth2").style.height = "4rem"
//         else if (nezukoHP == 15)
//             document.getElementById("nohealth2").style.height = "5rem"
//         else if (nezukoHP == 14)
//             document.getElementById("nohealth2").style.height = "6rem"
//         else if (nezukoHP == 13)
//             document.getElementById("nohealth2").style.height = "7rem"
//         else if (nezukoHP == 12)
//             document.getElementById("nohealth2").style.height = "8rem"
//         else if (nezukoHP == 11)
//             document.getElementById("nohealth2").style.height = "9rem"
//         else if (nezukoHP == 10)
//             document.getElementById("nohealth2").style.height = "10rem"
//         else if (nezukoHP == 9)
//             document.getElementById("nohealth2").style.height = "11rem"
//         else if (nezukoHP == 8)
//             document.getElementById("nohealth2").style.height = "11.5rem"
//         else if (nezukoHP == 7)
//             document.getElementById("nohealth2").style.height = "12rem"
//         else if (nezukoHP == 6)
//             document.getElementById("nohealth2").style.height = "12.5rem"
//         else if (nezukoHP == 5)
//             document.getElementById("nohealth2").style.height = "13rem"
//         else if (nezukoHP == 4)
//             document.getElementById("nohealth2").style.height = "13.5rem"
//         else if (nezukoHP == 3)
//             document.getElementById("nohealth2").style.height = "14rem"
//         else if (nezukoHP == 2)
//             document.getElementById("nohealth2").style.height = "14.2rem"
//         else if (nezukoHP == 1)
//             document.getElementById("nohealth2").style.height = "14.5rem"
//         else if (nezukoHP == 0)
//             document.getElementById("nohealth2").style.height = "14.9rem"
// }
