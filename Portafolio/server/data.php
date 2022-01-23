<?php 

$name;
$phone;
$email;
$coments;

if(
    isset($_POST['name']) || 
    isset($_POST['phone']) || 
    isset($_POST['email']) || 
    isset($_POST['coments'])){
    
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $coments = $_POST['coments'];
}




//Send Email
$to = "julionew19@gmail.com";
$subject = "Contacto desde el sitio web";
$message = "Nombre: ".$name."\n"."Telefono: ".$phone."\n"."Comentarios: ".$coments;
$headers = "From: ".$email;


mail($to, $subject, $message, $headers);





?>