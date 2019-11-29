<?php
  // $answer_file = 'input-source-consolidated.jsx';
  // $myfile = fopen($answer_file, "w");
  $source_file = file_get_contents("input-source.jsx");
  // echo $source;
  // $asArr = explode(' {', $source );
  // echo $asArr;


  // delete the 1st and last line of the string
  $nested = preg_replace('/^.+\n/', '', $source_file);
  $nested = preg_replace('/\n}$/', '', $nested);
  // echo $result;


  // this one get the first element as string,
  // the rest needs to be take out from other elements
  $asArr = explode(': {', $nested);
  // $last_one = $asArr[count($asArr) - 1];

  $source_arr = array();
  $counter = 0;
  
  // $asArr[0] is the first 1st level key
  // later is its contact and the next 1st level key
  array_push($source_arr, array($asArr[0]));
  array_splice($asArr, 0, 1); // remove the first element which is alreay inserted into array

  
  foreach( $asArr as $val ){
    $spe_arr = explode("},\n  ", $val);
    // $spe_arr[0] is 2nd level key & value

    // echo $spe_arr[0];
    // inside the 2nd level context
    $allKey_val = preg_split("/(:|,)/", $spe_arr[0]);
    $count = 0;
    while ($allKey_val[$count]){
      $secKey = str_replace("\n", "", $allKey_val[$count]); // remove the new line character
      $secKey = str_replace(" ", "", $secKey); // remove the new line character
      $secVal = str_replace("\n", "", $allKey_val[$count + 1]);
      $secVal = str_replace(" ", "", $secVal);
      $tmp_arr = array($secKey, $secVal);
      array_push($source_arr[$counter], $tmp_arr);

      // echo $secKey;
      // echo $secVal;
      // echo "\n";
      $count = $count + 2;
    }

    $counter = $counter + 1;
    // $spe_arr[1] is the 1st level key
    if ($spe_arr[1] !== NULL) {
      array_push($source_arr, array($spe_arr[1]));
    }
    // array_push($source_arr, array($spe_arr[1]));


    // $first_part = explode(': ', $spe_arr[0]);
    $first_part = preg_split( "/: |,/", $spe_arr[0] );
    // $output = preg_split( "/ (@|vs) /", $input );

    // echo $first_part[0];
    // echo "\n";
  }
  var_dump($source_arr); // show the whole array


?>
