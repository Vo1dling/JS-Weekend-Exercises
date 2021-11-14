function shortWord(string) {
	let words = string.split(" ");
	let shortestWord;
	for (let word of words) {
		if (shortestWord === undefined || shortestWord > word.length) {
			shortestWord = word.length;
		}
	}
	return shortestWord;
}
console.log(shortWord("This is a string"));