<?php
  $dist_file_name = "input-source-consolidated.jsx"; 
  $source_file = file_get_contents("input-source.jsx");
  $reference_file = file_get_contents("source-reference.jsx");



  // delete the 1st and last line of the string
  $nested = preg_replace('/^.+\n/', '', $source_file);
  $nested = preg_replace('/\n}$/', '', $nested);

  // this one get the first element as string,
  // the rest needs to be take out from other elements
  $asArr = explode(': {', $nested);

  $source_arr = array();
  $counter = 0;
  
  // $asArr[0] is the first 1st level key
  // later is its contact and the next 1st level key
  $first_key = str_replace(" ", "", $asArr[0]);
  echo $first_key;
  array_push($source_arr, array($first_key));
  array_splice($asArr, 0, 1); // remove the first element which is alreay inserted into array

  foreach( $asArr as $val ){
    $spe_arr = explode("},\n  ", $val);
    // $spe_arr[0] is 2nd level key & value
    // inside the 2nd level context
    $allKey_val = preg_split("/(\":|,)/", $spe_arr[0]);
    // echo $allKey_val[0];
    $count = 0;
    while ($allKey_val[$count]){
      $secKey = str_replace("\n", "", $allKey_val[$count]); // remove the new line character
      $secKey = str_replace(" ", "", $secKey); // remove the space character
      $secVal = str_replace("\n", "", $allKey_val[$count + 1]);
      $secVal = str_replace(" ", "", $secVal);
      $tmp_arr = array($secKey, $secVal);
      array_push($source_arr[$counter], $tmp_arr);
      $count = $count + 2;
    }

    $counter = $counter + 1;
    // $spe_arr[1] is the 1st level key
    if ($spe_arr[1] !== NULL) {
      array_push($source_arr, array($spe_arr[1]));
    }
  }
  // var_dump($source_arr); // show the whole array

  // for the reference file
  $nested = preg_replace('/^.+\n/', '', $reference_file);
  $nested = preg_replace('/\n}$/', '', $nested);
  $asArr = explode(': {', $nested);
  $reference_arr = array();
  $counter = 0;
  array_push($reference_arr, array(str_replace(" ", "",$asArr[0])));
  array_splice($asArr, 0, 1);
  foreach( $asArr as $val ){
    $spe_arr = explode("},\n  ", $val);
    $allKey_val = preg_split("/(\":|,)/", $spe_arr[0]);
    $count = 0;
    while ($allKey_val[$count]){
      $secKey = str_replace("\n", "", $allKey_val[$count]);
      $secKey = str_replace(" ", "", $secKey);
      $secVal = str_replace("\n", "", $allKey_val[$count + 1]);
      $secVal = str_replace(" ", "", $secVal);
      $tmp_arr = array($secKey, $secVal);
      array_push($reference_arr[$counter], $tmp_arr);
      $count = $count + 2;
    }
    $counter = $counter + 1;
    if ($spe_arr[1] !== NULL) { array_push($reference_arr, array($spe_arr[1])); }
  }
  // var_dump($reference_arr); // show the whole array

  // comparison part
  $source_length = count($source_arr);
  $reference_length = count($reference_arr);
  for ($a = 0; $a < $source_length; $a++){
    for ($b = 0; $b < $reference_length; $b++) {
      if($source_arr[$a][0] === $reference_arr[$b][0]) {
        // check nested index inside of it
        for ($c = 0; $c < count($source_arr[$a]); $c ++ ){
          for ($d = 0; $d < count($reference_arr[$b]); $d++) {
            if($source_arr[$a][$c][0] === $reference_arr[$b][$d][0]){
              $source_arr[$a][$c][1] = $reference_arr[$b][$d][1];
            }
          }
        }
      }
    }
  }
  // var_dump($source_arr); // show the whole array

  $result_file = fopen($dist_file_name, "w") or die("Unable to open file!");
  fwrite($result_file, "export default {\n");
  for ($a = 0; $a < $source_length; $a++){
    echo $source_arr[$a][0];
    fwrite($result_file, "  $source_arr[$a][0]\n");

  }




  fwrite($result_file, "}");

?>
