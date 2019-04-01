$(document).ready(function() {
    setHeader();
    setFooter();
    $(".div2").hide();
    $(".div3").hide();
    $(".div4").hide();
    $(".col-registro").hide();
})

function registro() {
    $(".col-inicio").hide();
    $(".col-registro").show();
    $(".inicio").css("text-decoration", "none");
    $(".registro").css("text-decoration", "underline");
}

function login() {
    $(".inicio").css("text-decoration", "underline");
    $(".registro").css("text-decoration", "none");
    $(".col-inicio").show();
    $(".col-registro").hide();
}

function about() {
    $(".div2").show();
    $(".div3").show();
    $(".div4").show();
    $(".footer").css("position", "relative");
    $(".footer").css("margin-top", "40px");
}

function setHeader() {

    var codeHeader = '';
    codeHeader = '<nav class="navbar navbar-dark fixed-top navbar-expand-lg  ">';
    codeHeader += '    <a class="navbar-brand" href="index.html">LOGO SHOP</a>';
    codeHeader += '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    codeHeader += '        <span class="navbar-toggler-icon"></span>';
    codeHeader += '    </button>';
    codeHeader += '    <div class="collapse navbar-collapse" id="navbarSupportedContent">';
    codeHeader += '        <ul class="navbar-nav mr-auto">';
    codeHeader += '             <li class="nav-item active">';
    codeHeader += '                 <a class="nav-link" href="index.html">Home</a>';
    codeHeader += '             </li>';
    codeHeader += '             <li class="nav-item active">';
    codeHeader += '                 <a onclick="about()" class="nav-link module" href="#nosotros">Quienes somos</a>';
    codeHeader += '             </li>';
    codeHeader += '             <li class="nav-item active">';
    codeHeader += '                 <a class="nav-link" href="contacto.html">Contacto</a>';
    codeHeader += '             </li>';
    codeHeader += '        </ul>';
    codeHeader += '    </div>';
    codeHeader += '</nav>';
    // CREAMOS ARRAY CON LOS LINK DE LA HOME.
    // arr_links_menu = [];
    // if (actual_page.indexOf('index') != -1) is_active = " active";
    // else is_active = "";
    // arr_links_menu.push(["Que Hacemos", "#nosotros", "nav item " + is_active, "nav-link"]);
    // if (actual_page.indexOf('index.html') != -1) is_active = " active";
    // else is_active = "";
    // arr_links_menu.push(["Contacto", "contacto.html", "nav item " + is_active, "nav-link"]);
    // if (actual_page.indexOf('contacto.html') != -1) is_active = " active";
    // else is_active = "";
    // for (var i = 0; i < arr_links_menu.length; i++) codeHeader += '<li class="' + arr_links_menu[i][2] + '"><a class="' + arr_links_menu[i][3] + '" href="' + arr_links_menu[i][1] + '">' + arr_links_menu[i][0] + '</a></li>';
    // codeHeader += '        </ul>';
    // codeHeader += '    </div>';
    // codeHeader += '</nav>';
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
    // codeFooter += '<div class="footer_apartado">';
    // codeFooter += '  <h4 class="footer_h">Company Link</h4>';
    // codeFooter += '    <ul><br>';
    // codeFooter += '        <li class="footer_texto"><a href="index.html"><p>Home</p></a></li>';
    // codeFooter += '        <li class="footer_texto"><a href="portfolio.html"><p>Portfolio</p></a></li>';
    // codeFooter += '        <li class="footer_texto"><a href="nosotros.html"><p>Nosotros</p></a></li>';
    // codeFooter += '        <li class="footer_texto"><a href="faqs.html"><p>FAQ\'S</p></a></li>';
    // codeFooter += '        <li class="footer_texto"><a href="contacto.html"><p>Contacto</p></a></li>';
    // codeFooter += '    </ul>';
    // codeFooter += '</div>';
    // codeFooter += '<div class="footer_apartado">';
    // codeFooter += '  <h4 class="footer_h">Social Networks</h4>';
    // codeFooter += '  <ul><br>';
    // codeFooter += '    <li class="footer_texto"><p><i class="fa fa-facebook"></i>Facebook</p></li>';
    // codeFooter += '    <li class="footer_texto"><p><i class="fa fa-twitter"></i>Twitter</p></li>';
    // codeFooter += '    <li class="footer_texto"><p><i class="fa fa-google-plus"></i>Google+</p></li>';
    // codeFooter += '    <li class="footer_texto"><p><i class="fa fa-youtube"></i>YouTube</p></li>';
    // codeFooter += '  </ul>';
    // codeFooter += '</div>';
    // codeFooter += '<div class="footer_apartado">';
    // codeFooter += '  <h4 class="footer_h">Contact Info</h4>';
    // codeFooter += '  <ul><br>';
    // codeFooter += '    <li class="footer_texto"><i class="material-icons">access_time</i><p>Monday - Friday: 9:00 - 19:00</p></li>';
    // codeFooter += '    <li class="footer_texto"><i class="material-icons">mail_outline</i><p>info@actividad-9.com</p></li>';
    // codeFooter += '    <li class="footer_texto"><i class="material-icons">phone</i><p>+34 123-456-789</p></li>';
    // codeFooter += '    <li class="footer_texto"><i class="material-icons">business</i><p>Distrito Telefónica Ronda de la Comunicación s/n 28050 Madrid</p></li>';
    // codeFooter += '  </ul>';
    // codeFooter += '</div>';
    // codeFooter += '<div class="footer_apartado">';
    // codeFooter += '  <div id="footer_mapa"></div>';
    // codeFooter += '</div>';
    // codeFooter += '</div>';

    try {
        document.getElementsByTagName('footer')[0].innerHTML = codeFooter;
    } catch (error) {
        msg = "Fallo, no se ha encontrado footer." + error;
        log(msg);
    }
}