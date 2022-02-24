<?php

$client_id = 'IF8';
$client_secret = '1777974CB8EBIF8 7980B58D824F';
$params = 'action=brands';

date_default_timezone_set('GMT');
$timestamp = date("Y, j M Y H:i:00 T");
$url = 'https://api.vtinfo.com/analytics/v2/finder';
$signature = $timestamp . $client_secret . $params . $client_id;
$hash = hash('sha256', $signature);

echo $signature . PHP_EOL;
echo $hash . PHP_EOL;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url . '?' . $params);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "vipCustID: $client_id",
    "vipTimestamp: $timestamp",
    "vipSignature: $hash",
    "Content-Type: application/json",
    'Accept: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
$result = curl_exec($ch);

var_dump($result);






// curl_setopt($ch, CURLOPT_HTTPHEADER, [
//     'vipCustID' => $client_id,
//     'vipTimestamp' => $timestamp,
//     'vipSignature' => $hash
// ]);
