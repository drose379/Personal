<?php

$info = json_decode( file_get_contents( "rates.json" ), true );
$newRate = json_decode( file_get_contents( "php://input" ), true )["newrate"];

// Get the array of current rates
$current = $info["rates"];


// Add the newRate to the end of the array
$current[] = $newRate;


// loop over current and get the new average, assign it to response, also write it to the rates.json file
$rateSum = 0;
foreach( $current as $rate ) {
  $rateSum += $current;
}

$newAverage = round( $rateSum / count( $current ) );
$rateCount = count( $current );

$response = [];
$response["ratecount"] = $rateCount;
$response["averagerate"] = $newAverage;
$response["rates"] = $current;

file_put_content( "rates.json", json_encode( $response ) );

header('Access-Control-Allow-Origin: *');
echo json_encode( $response );


// Update averagerate and ratecount properties of file
