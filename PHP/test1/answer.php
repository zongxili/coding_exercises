<?php
  // $answer_file = 'input-source-consolidated.jsx';
  // $myfile = fopen($answer_file, "w");
  $source = file_get_contents("input-source.jsx");//将整个文件内容读入到一个字符串中
  // echo $source;
  // $asArr = explode(' {', $source );
  // echo $asArr;


  // delete the 1st and last line of the string
  $result = preg_replace('/^.+\n/', '', $source);
  $result = preg_replace('/\n}$/', '', $result);
  // echo $result;

  $asArr = explode(': {', $result );
  echo "afas". $asArr[1];
  // echo "\n";
?>
