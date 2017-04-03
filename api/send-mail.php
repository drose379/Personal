<?php

require 'vendor/autoload.php';
use Mailgun\Mailgun;

$data = json_decode( file_get_contents( "php://input" ), true );
