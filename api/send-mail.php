<?php

require '../vendor/autoload.php';
use Mailgun\Mailgun;

$data = json_decode( file_get_contents( "php://input" ), true );

$mailgun = Mailgun::create( 'key-9f6d81b46519474e5b6fbecebf47b517' );
$domain = "sandboxde33fec0555248398f436cf70f466920.mailgun.org";

$sendResult = $mailgun->sendMessage(
  $domain,
  array(
    'from' => "Test Person <dylanrose60@gmail.com>",
    'to' => "Dylan <dylanrose60@gmail.com>",
    'subject' => "Dude it work?",
    "text" => "Yes, asshole."
  )
);
