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
  
  foreach( $asArr as $val ){
    echo $val;
    echo "\n";
  }

  // echo $inLastOne[0];
  // echo "\n";
?>
