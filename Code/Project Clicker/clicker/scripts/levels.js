function deathcounter(){
    if(tanjiroHP == 1){
        nbofkills++
    }
}
function levelappear(){
    if(nbofkills >= 5)
        document.getElementById("nezukohead").style.visibility = 'visible';
}
function levelchange(){
    if(nbofkills >= 5){
        document.getElementById("damage").style.visibility = 'hidden'; 
        document.getElementById("damage2").style.visibility = 'visible'; 
    }
    if(tanjiroHP < 10){
        nezukoHP = 20;
    }
    if(document.getElementById("damage2").style.visibility = 'visible'){
        document.getElementById("health").style.visibility = 'hidden'; 
        document.getElementById("healthfull").style.visibility = 'hidden'; 
        document.getElementById("health2").style.visibility = 'visible'; 
        document.getElementById("health2full").style.visibility = 'visible';
        document.getElementById("nohealth2").style.visibility = 'visible'; 
        document.getElementById("hp2").style.visibility = 'visible';
        document.querySelector(".nohealth").style.visibility = 'hidden'; 
        document.querySelector(".hp").style.visibility = 'hidden'; 
    }
    if(window.getComputedStyle(document.querySelector(".nohealth")).visibility === "hidden" ){
        document.querySelector(".nohealth").style.height = "0px";
        document.querySelector(".hp").style.height = "0px";
        document.querySelector("#health").style.height = "0px";
        document.querySelector("#healthfull").style.height = "0px";
        document.querySelector("#health").style.width = "0px";
        document.querySelector("#healthfull").style.width = "0px";
    }
    if(window.getComputedStyle(document.querySelector("#damage")).visibility === "hidden" ){
        document.querySelector("#damage").style.height = "0px";
        document.querySelector("#damage").style.width = "0px";
    }
}
function levelreturn(){
    if(nbofkills >= 5){
        document.getElementById("damage").style.visibility = 'visible'; 
        document.getElementById("damage2").style.visibility = 'hidden'; 
    }
    if(tanjiroHP < 10){
        tanjiroHP = 10;
        document.getElementById("health").innerHTML = tanjiroHP
    }   
    if(document.getElementById("damage2").style.visibility = 'hidden'){
        document.getElementById("health").style.visibility = 'visible'; 
        document.getElementById("healthfull").style.visibility = 'visible'; 
        document.getElementById("health2").style.visibility = 'hidden'; 
        document.getElementById("health2full").style.visibility = 'hidden';
        document.getElementById("nohealth2").style.visibility = 'hidden'; 
        document.getElementById("hp2").style.visibility = 'hidden';
        document.querySelector(".nohealth").style.visibility = 'visible'; 
        document.querySelector(".hp").style.visibility = 'visible'; 
    }
    if(window.getComputedStyle(document.querySelector(".nohealth")).visibility === "visible" ){
        document.querySelector(".nohealth").style.height = "1rem";
        document.querySelector(".hp").style.height = "1rem";
    }
}