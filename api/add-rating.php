<?php

$info = json_decode( file_get_contents( "rate.json" ), true );
$newRate = json_decode( file_get_contents( "php://info" ), true );

// Get the array of current rates

// Add the newRate to the end of the array

// Loop through the array with the newRate, add them all up

// Divide that by the number of items in the array to get the average (round decimal down)

// Update averagerate and ratecount properties of file
