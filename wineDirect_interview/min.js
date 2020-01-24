function min(arr){
	if (arr.length == 0)
		return arr[0];
	let min = arr[0]
	arr.map(num => {
		if (num < min)
			min = num;
	});
	return min;
}

console.log(min([0]));
console.log(min([0, 1, -1, -3, 10]));