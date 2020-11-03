
$(document).ready(function () {


  $(".next").click(nextImg);
  $(".prev").click(prevImg);




  //FUNZIONI
  // funzione per l'avanti
  function nextImg() {
    //console.log("hai cliccato su next!!");

    var imgAttiva = $("img.active");

    imgAttiva.removeClass("active");

    // se dove sono è l'ultima img allora
    if (imgAttiva.hasClass("last")){
      //torna alla prima img
      $("img.first").addClass("active");
    } else {// altrimenti
      //fai diventare attiva l'immagine successiva
      imgAttiva.next("img").addClass("active");
    }

    // $("img.active").removeClass("active").next("img").addClass("active");
  }



  // funzione per l'indietro
  function prevImg(){
    // console.log("hai cliccato su prev");

    var imgAttiva = $("img.active");

    imgAttiva.removeClass("active");

    // se dove sono è la prima img allora
    if (imgAttiva.hasClass("first")){

      //torna all'ultima img
      $("img.last").addClass("active");
    } else{

      //fai diventare attiva l'immagine precedente
      imgAttiva.prev("img").addClass("active")
    }

    }
  }

);
