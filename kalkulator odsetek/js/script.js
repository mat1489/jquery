'use strict';
/*var wyslij = document.getElementById('button').addEventListener('click', function (e) {
    e.preventDefault();
    

});*/

function oblicz (){
  
    //    pkt4
    var wplata = document.getElementById('numer').value; 
    parseInt(wplata);
    console.log("wplata: "+wplata);
    
    //    pkt5
    var iloscLat = document.getElementById('iloscLat').value;     
    console.log("ilosc lat: "+iloscLat);
    
    //    pkt6
    var okresKapitalizacji = document.getElementById('wybor').value;     
    console.log("okres kapitalizacji: "+okresKapitalizacji);
    
    //      pkt7
    var oprocentowanie =  document.getElementById('oprocentowanie').value;
    oprocentowanie= oprocentowanie/100;    
    console.log("oprocentowanie: "+oprocentowanie);
    
    //      pkt8
    var test = document.getElementById('belka').value;
    console.log(test);
    var podatek = false;
    
    
    
    
    
 
    
  
    
}
document.getElementById('licz').onclick = oblicz;