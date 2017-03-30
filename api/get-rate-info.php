<?php

$response = [];
//$response["ratecount"] = 15;
//$response["averagerate"] = 4;

$info = json_decode( file_get_contents( "rates.json" ) , true );

$response["ratecount"] = $info["ratecount"];
$response["averagerate"] = $info["averagerate"];

header('Access-Control-Allow-Origin: *');
echo json_encode( $response );
