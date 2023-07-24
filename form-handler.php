<?php
$name = $_POST['name'];
$visitor_email= $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

$to = 'mavisbhawanipur2001@gmail.com';

$subject = 'New Form Submission'

$txt ="Name = ". $name ."\r\n Email = " .$email . "\r\n Message =" .$message . "\r\n Number =" . $number;


$headers = "From: $email_from" . "\r\n";


if($email!=NULL){
  mail($to,$subject,$txt,$headers);
}

header("Location:contact.html");

?>