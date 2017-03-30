<?php

$response = [];
$response["rate-count"] = 15;
$response["average-rate"] = 4;

header('Access-Control-Allow-Origin: *');
echo json_encode( $response );
