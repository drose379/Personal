<?php

$info = json_decode( file_get_contents( "rates.json" ), true );
$newRate = json_decode( file_get_contents( "php://input" ), true )["newrate"];

// Get the array of current rates
$current = $info["rates"];


// Add the newRate to the end of the array
$current[] = $newRate;

$response = [];
$response["ratecount"] = 2;
$response["averagerate"] = 3;
$response["rates"] = $current;
file_put_contents( "rates.json", json_encode( $response ) );


// Loop through the array with the newRate, add them all up
$allRates = 0;
foreach( $current as $rate ) {
  $allRates += $rate;
}


// Divide that by the number of items in the array to get the average (round decimal down)

header('Access-Control-Allow-Origin: *');

error_log( json_encode( file_get_contents( "rates.json" ) ) );


// Update averagerate and ratecount properties of file
