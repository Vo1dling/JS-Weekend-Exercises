function longestWord(string) {
	let words = string.split(" ");
	let longestword;
	for (let word of words) {
		if (longestword === undefined || longestword > word.length) {
			longestword = word.length;
		}
	}
	return longestword;
}
console.log(longestWord("This is a string"));