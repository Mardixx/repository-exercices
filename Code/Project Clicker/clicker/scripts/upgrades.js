let price = 5;
let price2 = 5;

function scaledownbtn() {
    document.getElementById("nichirin").style.transform = "scale(0.9)";
    document.getElementById("nichirinprice").style.transform = "scale(0.9)";
}
function upscalebtn() {
    document.getElementById("nichirin").style.transform = "scale(1)";
    document.getElementById("nichirinprice").style.transform = "scale(1)";
}
function scaledownbtn2() {
    document.getElementById("technique").style.transform = "scale(0.9)";
    document.getElementById("techniqueprice").style.transform = "scale(0.9)";
}
function upscalebtn2() {
    document.getElementById("technique").style.transform = "scale(1)";
    document.getElementById("techniqueprice").style.transform = "scale(1)";
}
function buy() {
    if (price > money)
        return;
    if (money <= 0) {
        money = 0
        return;
    } else {
        money -= price
        dPoint += 1
        document.getElementById("moneycount").innerHTML = ": " + money;
        nbofupgrades++
        document.getElementById("nichirin").innerHTML = "Nichirin : " + nbofupgrades;
    }
    price = price * 2
    document.getElementById("nichirinprice").innerHTML = "Yen : " + price;

}
function moneycount() {
    if (money < price) {
        document.getElementById("nichirin").style.backgroundColor = "#781e16";
    }
}
function moneyreturn() {
    document.getElementById("nichirin").style.backgroundColor = "teal";
}
function moneycount2() {
    if (money < price2) {
        document.getElementById("technique").style.backgroundColor = "#781e16";

    }
}
function moneyreturn2() {
    document.getElementById("technique").style.backgroundColor = "teal";
}
function buy2() {
    if (price2 > money)
        return;
    if (money <= 0) {
        money = 0
        return;
    } else {
        money -= price2
        document.getElementById("moneycount").innerHTML = ": " + money;
        nbofupgrades2++
        document.getElementById("technique").innerHTML = "Techniques : " + nbofupgrades2;
    }
    price2 = price2 * 3
    document.getElementById("techniqueprice").innerHTML = "Yen : " + price2;

    setInterval(dps, 1000);

    function dps() {
        if (tanjiroHP < 0)
            return;
        if (nbofupgrades2 >= 1) {
            tanjiroHP--;
            if (tanjiroHP <= 0)
                tanjiroHP = 10;
            if (tanjiroHP == 10)
                money += 5;
            document.getElementById("moneycount").innerHTML = ": " + money;
            document.getElementById("health").innerHTML = tanjiroHP;
        }
    }
    setInterval(dps2, 1000);

    function dps2(){

            if (nezukoHP < 0)
                return;
            if (nbofupgrades2 >= 1) {
                nezukoHP--;
                if (nezukoHP <= 0)
                    nezukoHP = 20;
                if (nezukoHP == 20)
                    money += 5;
                document.getElementById("moneycount").innerHTML = ": " + money;
                document.getElementById("health2").innerHTML = nezukoHP;
                console.log(nezukoHP);
            }
    }
}
