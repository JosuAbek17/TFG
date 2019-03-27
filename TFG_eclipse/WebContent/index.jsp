<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/index.css"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
<div class="container-fluid div1">
        <header></header>
        <video class="video" autoplay muted loop id="myVideo">
                    <source src="video/ocean.mp4" type="video/mp4">
                </video>
	<div class="row f-row">
            <div class="col-md-12 f-col">
                <h1 class="f-h1">Inicio de Sesión</h1>
                <form class="form" action="AccesControler?opcion=validar" method="post">
                    <div class="input-group f-fgr">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input id="user" type="text" class="form-control" name="user" placeholder="Usuario">
                    </div>
                    <div class="input-group f-fgr">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                        <input id="password" type="password" class="form-control" name="pass" placeholder="Password">
                    </div>
                    <div class="f-fgr">
                        <button type="button" class="btn btn-info btn-block" value="Enviar">Entrar</button>
                    </div>
                    <div class="f-reg">
                        <a class="f-a" href="Registro.jsp">Registro</a>
                        <hr class="f-hr">
                    </div>
                </form>
            </div>
        </div>

    </div>
    <div class="row div2">
        <div class="ab-row row">
            <div class="ab-col col-md-12 col-sm-12">
                <h2 class="ab-h">About Us</h2>
            </div>
        </div>
        <div class="ab-row row">
            <div class="ab-col-p col-md-12 col-sm-12">
                <p class="ab-p">Lorem Ipsum is <span class="ab-sp">simply dummy text of the printing</span> and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and it has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of <span class="ab-sp">Letraset sheets containing Lorem Ipsum passages </span>,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        <div class="ab-row-i row">
            <div class="ab-col col-md-3 col-sm-3">
                <p><i class="ab-i material-icons">fingerprint</i>
                </p><br>
                <h5>Security</h5>

            </div>
            <div class="ab-col col-md-3 col-sm-3">
                <p><i class="ab-i material-icons">dvr</i>
                </p><br>
                <h5>Web Design</h5>

            </div>
            <div class="ab-col col-md-3 col-sm-3">
                <p><i class="ab-i material-icons">	aspect_ratio</i>
                </p><br>
                <h5>Responsive</h5>

            </div>
            <div class="ab-col col-md-3 col-sm-3">
                <p><i class="ab-i material-icons">cloud_queue</i>
                </p><br>
                <h5>Cloud</h5>

            </div>
        </div>
    </div>
    <footer></footer>

	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script src="js/index.js"></script>
</body>
</html>