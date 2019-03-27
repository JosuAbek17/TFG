$(document).ready(function() {
    setHeader();
    setFooter();
})

function setHeader() {
    actual_page = location.href.split("/")[location.href.split("/").length - 1];
    var is_active = '';


    var codeHeader = '';
    codeHeader = '<nav class="navbar navbar-dark fixed-top navbar-expand-lg  ">';
    codeHeader += '    <a class="navbar-brand" href="index.jsp">LOGO SHOP</a>';
    codeHeader += '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    codeHeader += '        <span class="navbar-toggler-icon"></span>';
    codeHeader += '    </button>';
    codeHeader += '    <div class="collapse navbar-collapse" id="navbarSupportedContent">';
    codeHeader += '        <ul class="navbar-nav mr-auto">';
    // CREAMOS ARRAY CON LOS LINK DE LA HOME.
    arr_links_menu = [];
    if (actual_page.indexOf('index') != -1) is_active = " active";
    else is_active = "";
    arr_links_menu.push(["Home", "index.jsp", "nav item " + is_active, "nav-link", '<i class=\"fa fa-home\"></i>']);
    if (actual_page.indexOf('portfolio') != -1) is_active = " active";
    else is_active = "";
    arr_links_menu.push(["Que Hacemos", "nosotros.html", "nav item " + is_active, "nav-link", '<i class="fas fa-users"></i>']);
    if (actual_page.indexOf('faqs.html') != -1) is_active = " active";
    else is_active = "";
    arr_links_menu.push(["Contacto", "Contacto.jsp", "nav item " + is_active, "nav-link", '<i class="fas fa-question-circle"></i>']);
    if (actual_page.indexOf('contacto.jsp') != -1) is_active = " active";
    else is_active = "";
    for (var i = 0; i < arr_links_menu.length; i++) codeHeader += '<li class="' + arr_links_menu[i][2] + '"><a class="' + arr_links_menu[i][3] + '" href="' + arr_links_menu[i][1] + '">' + arr_links_menu[i][0] + ' ' + arr_links_menu[i][4] + '</a></li>';
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
    codeFooter += '<div class="row">';
    codeFooter += '<div class="footer_apartado">';
    codeFooter += '  <h2 class="footer_h">Elemento 9</h2>';
    codeFooter += '  <p class="footer_texto">Lorem ipsum dolor sit amet, magna <br>habemus ius ad, qui minimum voluptar</p>';
    codeFooter += '</div>';
    codeFooter += '<div class="footer_apartado">';
    codeFooter += '  <h4 class="footer_h">Company Link</h4>';
    codeFooter += '    <ul><br>';
    codeFooter += '        <li class="footer_texto"><a href="index.html"><p>Home</p></a></li>';
    codeFooter += '        <li class="footer_texto"><a href="portfolio.html"><p>Portfolio</p></a></li>';
    codeFooter += '        <li class="footer_texto"><a href="nosotros.html"><p>Nosotros</p></a></li>';
    codeFooter += '        <li class="footer_texto"><a href="faqs.html"><p>FAQ\'S</p></a></li>';
    codeFooter += '        <li class="footer_texto"><a href="contacto.html"><p>Contacto</p></a></li>';
    codeFooter += '    </ul>';
    codeFooter += '</div>';
    codeFooter += '<div class="footer_apartado">';
    codeFooter += '  <h4 class="footer_h">Social Networks</h4>';
    codeFooter += '  <ul><br>';
    codeFooter += '    <li class="footer_texto"><p><i class="fa fa-facebook"></i>Facebook</p></li>';
    codeFooter += '    <li class="footer_texto"><p><i class="fa fa-twitter"></i>Twitter</p></li>';
    codeFooter += '    <li class="footer_texto"><p><i class="fa fa-google-plus"></i>Google+</p></li>';
    codeFooter += '    <li class="footer_texto"><p><i class="fa fa-youtube"></i>YouTube</p></li>';
    codeFooter += '  </ul>';
    codeFooter += '</div>';
    codeFooter += '<div class="footer_apartado">';
    codeFooter += '  <h4 class="footer_h">Contact Info</h4>';
    codeFooter += '  <ul><br>';
    codeFooter += '    <li class="footer_texto"><i class="material-icons">access_time</i><p>Monday - Friday: 9:00 - 19:00</p></li>';
    codeFooter += '    <li class="footer_texto"><i class="material-icons">mail_outline</i><p>info@actividad-9.com</p></li>';
    codeFooter += '    <li class="footer_texto"><i class="material-icons">phone</i><p>+34 123-456-789</p></li>';
    codeFooter += '    <li class="footer_texto"><i class="material-icons">business</i><p>Distrito Telefónica Ronda de la Comunicación s/n 28050 Madrid</p></li>';
    codeFooter += '  </ul>';
    codeFooter += '</div>';
    codeFooter += '<div class="footer_apartado">';
    codeFooter += '  <div id="footer_mapa"></div>';
    codeFooter += '</div>';
    codeFooter += '</div>';

    try {
        document.getElementsByTagName('footer')[0].innerHTML = codeFooter;
    } catch (error) {
        msg = "Fallo, no se ha encontrado footer." + error;
        log(msg);
    }
}