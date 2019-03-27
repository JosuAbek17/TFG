<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<body>
<h1>Seleccione un año para cargar los datos</h1>
<h2>Tenga cuidado hay miles de datos cada año podria tardar mas de una hora en cargarse en su base de datos</h2>
<h3>Para ver el funcionamiento sin tener que cargar la base de datos entera seleccione prueba</h3>
<form action="InstallControler?opcion=cargar" method="post">



<p> <select name="año">
	
   <option value= 1>  Todos </option> 
   <option value= 2>  Prueba </option> 
   <option value= 2012>  2012 </option> 
   <option value= 2013>  2013 </option> 
   <option value= 2014>  2014 </option> 
   <option value= 2015>  2015 </option> 
   <option value= 2016>  2016 </option> 
   <option value= 2017>  2017 </option> 
   <option value= 2018>  2018 </option> 
   <option value= 2019>  2019 </option> 
   
  

   
</select>
</p>
<p><input type="submit" value="VerLibros"></p>
</form>
</body>
</body>
</html>