function masking(string) {
	string = string.trim();
	for (let i = 0; i < string.length - 4; i++) {
		string = string.replace(string[i], "#");
	}
	return string;
}
console.log(masking("1234123412341234"));
console.log(masking("Skip"));
console.log(masking("            1"));