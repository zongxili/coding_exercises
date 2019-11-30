# Requirements

Please use pure PHP(do not use library) to create a parser and complete the following requirement:
- input-source.jsx provides the enitre the key/value records in nested structure, the key could be duplicate in different sections, e.g. there's common.name and common_column_titles.name;
-  source-reference.jsx has similar structure as input-source.jsx, but may have more or less less key/values
- requirement: loop through input-source.jsx, find the same level key/value in the source-reference.jsx, if the key can be found in the source-reference.jsx file, then replace the value in the input-source.jsx with the value from source-reference.jsx, if the key can not be found in the in the input-source.jsx, then keep the original key and value, in the end output the entire record to input-source-consolidated.jsx
- for the input-source-consolidated.jsx file, keep the original sequence from input-source.jsx; the total record count should be same as input-source.jsx, no more or less;
- define the file name in constant, so it can be easily replaced if necessary;
- Count the time you spend for this task