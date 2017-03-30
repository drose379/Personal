<?php

$response = [];
$response["ratecount"] = 15;
$response["averagerate"] = 4;

header('Access-Control-Allow-Origin: *');
echo json_encode( $response );
