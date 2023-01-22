<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
include('conexionBd.php');
 
$id="";
$cantidad=0;
$estrellas=0;
$id=$_POST['idArticulo'];
$cantidad=$_POST['cantidad'];
$estrellas=$_POST['estrellas'];

$sql = "update Articulos set UnidadesVendidas=(UnidadesVendidas+$cantidad), SumaEstrellas=(SumaEstrellas+$estrellas),NumeroVentas=(NumeroVentas+$1) where id='".$id."'"; 
$resultado = mysqli_query($connect, $sql); 
print( "Articulo ".$id. "actualizado ............");
$connect->close();
?>