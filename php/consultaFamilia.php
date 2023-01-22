<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
include('conexionBd.php');

$sql = "SELECT * FROM Familia ORDER BY id  ";
$resultado = mysqli_query($connect, $sql);
while ($row = mysqli_fetch_assoc($resultado)) {
    $output[] = $row;
}
print(json_encode($output));
$connect->close();
?>
