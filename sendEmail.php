<?php

error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_STRICT);

require_once "Mail.php";

$host = "ssl://smtp.dreamhost.com";
$username = "doug.goldberg@me.com";
$password = "King704852!@";
$port = "465";
$to = "doug.goldberg@me.com";
$email_from = "youremail@example.com";
$email_subject = "JOB INQUIRY: Doug Goldberg's Portfolio";
$email_body = "whatever you like" ;
$email_address = "reply-to@example.com";

$headers = array ('From' => $email_from, 'To' => $to, 'Subject' => $email_subject, 'Reply-To' => $email_address);
$smtp = Mail::factory('smtp', array ('host' => $host, 'port' => $port, 'auth' => true, 'username' => $username, 'password' => $password));
$mail = $smtp->send($to, $headers, $email_body);


if (PEAR::isError($mail)) {
echo("<p>" . $mail->getMessage() . "</p>");
} else {
echo("<p>Message successfully sent!</p>");
}
?>