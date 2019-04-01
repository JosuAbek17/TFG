$(document).ready(function() {
    setHeader();
    setFooter();
    // $(".div2").hide();
    // $(".div3").hide();
    // $(".contacto").hide();
    // $(".footer").hide();
    $(".col-registro").hide();
    $(".col-chat").hide();
    $(".row-contact").hide();
    setMap();
})

function registro() {
    $(".col-inicio").hide();
    $(".col-registro").show();
    $(".inicio").css("text-decoration", "none");
    $(".registro").css("color", "yellow");
    $(".inicio").css("color", "wheat");
}

function login() {
    $(".inicio").css("color", "yellow");
    $(".registro").css("color", "wheat");
    $(".registro").css("text-decoration", "none");
    $(".inicio").css("text-decoration", "none");
    $(".col-inicio").show();
    $(".col-registro").hide();
}

function about() {
    $(".div2").show();
    // $(".div1").hide();

    // $(".contacto").hide();
    // $(".footer").hide();
}

function contacto() {
    // $(".div1").hide();
    // $(".div2").hide();
    $(".contacto").show();
    $(".footer").show();

}

function setHeader() {

    var codeHeader = '';
    codeHeader = '<nav class="navbar navbar-expand-md">';
    codeHeader += '    <a class="navbar-brand" href="index.html#inicio">CleanCloud</a>';
    codeHeader += '    <button class="navbar-toggler  pull-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">';
    codeHeader += '        <span class="navbar-toggler-icon"></span>';
    codeHeader += '    </button>';
    codeHeader += '    <div class="collapse navbar-collapse" id="collapsibleNavbar">';
    codeHeader += '        <ul class="navbar-nav">';
    codeHeader += '             <li class="nav-item">';
    codeHeader += '                 <a onclick="about()" class="nav-link" href="index.html#nosotros">Quienes somos</a>';
    codeHeader += '             </li>';
    codeHeader += '             <li class="nav-item">';
    codeHeader += '                 <a class="nav-link" href="#">Otro</a>';
    codeHeader += '             </li>';
    codeHeader += '             <li class="nav-item">';
    codeHeader += '                 <a onclick="contacto()" class="nav-link" href="index.html#contacto">Contacto</a>';
    codeHeader += '             </li>';
    codeHeader += '        </ul>';
    codeHeader += '    </div>';
    codeHeader += '</nav>';

    try {
        document.getElementsByTagName('header')[0].innerHTML = codeHeader;
    } catch (error) {
        msg = "Fallo, no se ha encontrado header: " + error;
        log(msg)
    }
}

function setFooter() {
    var codeFooter = '';
    codeFooter += '<div class="row foot-row">';
    codeFooter += '<div class="col-md-12 col-sm-12 foot-col">';
    codeFooter += '<img src="../img/abeja2.png" alt="abeja">';
    codeFooter += '</div>';
    codeFooter += '</div>';
    codeFooter += '<div class="row foot-row">';
    codeFooter += '<div class="col-md-12 col-sm-12 foot-col">';
    codeFooter += '<p>Euskadi Plaza, 5, 48009 Bilbo, Bizkaia, España, W4 5PY</p>';
    codeFooter += '</div>';
    codeFooter += '</div>';
    codeFooter += '<div class="row foot-row  info">';
    codeFooter += '<div class="col-md-6 col-sm-6 foot-col">';
    codeFooter += '<p>T <span><a href="tel:555555555">+ 555 555 555</a></span>';
    codeFooter += '</div>';
    codeFooter += '<div class="col-md-6 col-sm-6 foot-col">';
    codeFooter += '<p>E <span><a href="mailto:aaa@gmail.com">aaa@gmail.com</a></span></p>';
    codeFooter += '</div>';
    codeFooter += '</div>';
    codeFooter += '<div class="row foot-row social">';
    codeFooter += '<div class="col-md-3 col-sm-3 foot-col">';
    codeFooter += '  <a href=""><i class="fa fa-twitter"></i></a>';
    codeFooter += '</div>';
    codeFooter += '<div class="col-md-3 col-sm-3 foot-col">';
    codeFooter += '  <a href=""><i class="fa fa-facebook"></i></a>';
    codeFooter += '</div>';
    codeFooter += '<div class="col-md-3 col-sm-3 foot-col">';
    codeFooter += '  <a href=""><i class="fa fa-youtube-play"></i></a>';
    codeFooter += '</div>';
    codeFooter += '<div class="col-md-3 col-sm-3 foot-col">';
    codeFooter += '  <a href=""><i class="fa fa-instagram"></i></a>';
    codeFooter += '</div>';
    codeFooter += '</div>';
    codeFooter += '<div class="row foot-row copy">';
    codeFooter += '<div class="col-md-12 col-sm-12 foot-col">';
    codeFooter += '<p>XXXXX 2019. ALL RIGHTS RESERVED</p>';
    codeFooter += '</div>';
    codeFooter += '</div>';
    codeFooter += '<div class="row foot-row copy">';
    codeFooter += '<div class="col-md-12 col-sm-12 foot-col">';
    codeFooter += '<p>PRIVACY POLICY | TERMS AND CONDITIONS | COMPANY NO. 06552505</p>';
    codeFooter += '</div>';
    codeFooter += '</div>';


    try {
        document.getElementsByTagName('footer')[0].innerHTML = codeFooter;
    } catch (error) {
        msg = "Fallo, no se ha encontrado footer." + error;
        log(msg);
    }
}
// CONTACTO, MAP Y CHAT
var questionNum = 0; // keep count of question, used for IF condition.
var question = '<h2>¿ Cuál es tu nombre ?</h2>'; // first question

var output = document.getElementById('output'); // store id="output" in output variable
output.innerHTML = question; // ouput first question

function bot() {
    var input = document.getElementById("input").value;
    console.log(input);



    if (questionNum == 0) {
        output.innerHTML = '<h2>¿ Qué tal ' + input + '?</h2>'; // output response
        document.getElementById("input").value = ""; // clear text box
        question = '<h2>¿ Cuales son tus apellidos ?</h2>'; // load next question		
        setTimeout(timedQuestion, 2000); // output next question after 2sec delay
    } else if (questionNum == 1) {
        output.innerHTML = '<h2>Ya casi termino...</h2>';
        document.getElementById("input").value = "";
        question = '<h2>Escribe tu email por favor: </h2>';
        setTimeout(timedQuestion, 2000);
    } else if (questionNum == 2) {
        output.innerHTML = '<h2>La última</h2>';
        document.getElementById("input").value = "";
        question = '<h2>Un Telefono:</h2>';
        setTimeout(timedQuestion, 2000);
    } else if (questionNum == 3) {
        output.innerHTML = '<h2>Te llamaremos enseguida</h2>';
        setTimeout(timedQuestion, 2000);
        document.getElementById("input").value = "";
        question = '<h2>Hasta pronto</h2>';
        $(".boton2").show();
        questionNum = 0;
        $("#input").hide();

        setTimeout(timedQuestion, 2000);

        // setCont();
        // questionNum = 0;

    }

}

function setCont() {
    $(".col-chat").hide();
    $(".col-p").hide();
    $(".boton").hide();
    $(".row-contact").show();
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
    if (e.which == 13) {
        bot(); // run bot function when enter key pressed
        questionNum++; // increase questionNum count by 1
    }
});

function setChat() {
    $(".col-p").hide();
    $(".boton").hide();
    $(".boton2").hide();
    $(".col-chat").show();
    $("#input").focus();

}
var mapa;
var marcador;

function setMap() {

    var latitud = 43.2679701;
    var longitud = -2.9386427;
    mapa = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitud, lng: longitud },
        zoom: 15
    });
    marcador = new google.maps.Marker({
        position: { lat: latitud, lng: longitud },
        map: mapa,
        title: "CleanCloud"
    })
}