'use strict';

   
//      pkt9

function obliczZysk(wplata,iloscLat,okresKapitalizacji,oprocentowanie){
    
    var podatek;

         if(document.formularz.belka.checked){
            //alert('yes');
            podatek = true;}
        else{
            //alert('no');
            podatek = false;}
    
          if(podatek==true){
           var oprocentowanieOpodatkowane = oprocentowanie * (81 /100);
            }else{
               oprocentowanieOpodatkowane=oprocentowanie;
            }

    var podstawa =(1+(oprocentowanieOpodatkowane/okresKapitalizacji));
    console.log("Podstawa: "+podstawa);
    var potega=iloscLat*okresKapitalizacji;
    console.log("potega: "+potega);
    var kapital=wplata*Math.pow(podstawa, potega);
    console.log("kapital: "+kapital);
    
    return kapital.toFixed(2);
  
}


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
    
    var kapitalFinalny=obliczZysk(wplata,iloscLat,okresKapitalizacji,oprocentowanie);
//    console.log("Kapital finalny: "+kapitalFinalny);
   
    document.getElementById('wynik').innerHTML=kapitalFinalny+" PLN";
 
    
  
    
}
document.getElementById('licz').onclick = oblicz;
