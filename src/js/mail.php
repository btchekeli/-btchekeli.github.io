<?php
if($_POST){
  $email = $_POST['email'];
  $name = $_POST['name'];
  $object = $_POST['object'];
  $message = $_POST['message'];

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "From: $name <$email>\r\nReply-to : $name <$email>\nX-Mailer:PHP";

  $subject="$object";
  $destinataire="brunelt7@gmail.com";
  $body="$message";

  if(mail($destinataire,$object,$body,$headers)) {
    $response['status'] = 'success';
    $response['msg'] = 'Votre message a été envoyé';
  } else {
    $response['status'] = 'error';
    $response['msg'] = 'Something went wrong';
  }

  echo json_encode($response);
}
?>