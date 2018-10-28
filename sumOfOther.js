 function sumOfOther(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		let sum = (arr.reduce(function(a, b) {return a + b;}) - arr[i]);
		result.push(sum);
	}
	return result;
} 