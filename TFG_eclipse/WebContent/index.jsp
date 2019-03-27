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
</head>
<body>
	<div class="container-fluid">
	<video class="video" autoplay muted loop id="myVideo">
        <source src="video/ocean.mp4" type="video/mp4">
	</video>

    <div class="row">
        <div class="col-12">
            <img class="logo" src="img/abeja2.png" alt="#">
        </div>
    </div>
    <div class="row f-row">
            <div class="col-md-12 f-col">
                <h1 class="f-h1">Inicio de Sesión</h1>
                <form class="form">
                    <div class="input-group f-fgr">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input id="email" type="text" class="form-control" name="email" placeholder="Email">
                    </div>
                    <div class="input-group f-fgr">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                        <input id="password" type="password" class="form-control" name="password" placeholder="Password">
                    </div>
                    <div class="f-fgr">
                        <button type="button" class="btn btn-info btn-block" value="Enviar">Entrar</button>
                    </div>
                    <div class="f-reg">
                        <a class="f-a" href="#">Registro</a>
                        <hr class="f-hr">
                    </div>
                </form>
            </div>
        </div>

</div>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>