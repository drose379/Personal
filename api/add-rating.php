<?php

$info = json_decode( file_get_contents( "rates.json" ), true );
$newRate = json_decode( file_get_contents( "php://info" ), true )["newrate"];

header('Access-Control-Allow-Origin: *');

// Get the array of current rates
$current = $info["rates"];


// Add the newRate to the end of the array
$current[] = $newRate;


// Loop through the array with the newRate, add them all up
$allRates = 0;
foreach( $current as $rate ) {
  $allRates += $rate;
}


// Divide that by the number of items in the array to get the average (round decimal down)
echo "New Average: " . $allRates / sizeof( $current );


// Update averagerate and ratecount properties of file
