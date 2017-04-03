<?php

require '../vendor/autoload.php';
use Mailgun\Mailgun;

$data = json_decode( file_get_contents( "php://input" ), true );

$mailgun = new Mailgun( 'key-9f6d81b46519474e5b6fbecebf47b517' );
$domain = "sandboxde33fec0555248398f436cf70f466920.mailgun.org";

$sendResult = $mailgun->sendMessage(
  $domain,
  array(
    'from' => $data['name'] . "<dylanrose60@gmail.com>",
    'to' => "Dylan <dylanrose60@gmail.com>",
    'subject' => "From Website",
    "text" => $data['message'] . '--- FROM: ' . $data['replyto']
  )
);

echo json_encode( array( 'result' => $sendResult->http_response_code ) );
