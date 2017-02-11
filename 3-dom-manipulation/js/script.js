jQuery(document).ready(function(){
  'use strict'  
    
    //pobieranie tekstu
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
    
    //dodawanie tekstu
    $(".paragraf").text(tekstParagrafuPierwszego);
    
    
    //dodawanie html
    $(".paragrafnext").html("To jest <strong> paragraf</strong>z dodanym <br> HTML");
    
    
    // dodawanie tresci na koncu selektora
    $(".paragrafnext").append("Tresc na koncu selektora");
    
    //dodawanie tresci za selektorem
    $(".paragrafnext").after("tresc za selektorem");
    
    //usuwanie elementu i jego zawartosci
    $("strong").remove();
    
    //usuwanie tylko jego zawartosci
    $('.paragraf').empty();

    //dodawanie css
    $(".paragrafnext").css({'font-size': '3em', 'color': 'red'});
                            

    //dodawanie klasy
    $('h1').addClass('blue');
    
    //dodawnie atrybutu
    $('h1').attr("imie","mateusz");
});

