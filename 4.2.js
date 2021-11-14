function tribonacciSequence(startingSeq, N) {
	if (!startingSeq.includes(0)) {
		return "Starting Sequence must include a zero";
	}
	let tribonacci = [...startingSeq];
	for (let i = 0; i < N - 1; i++) {
		tribonacci[i + 3] = tribonacci[i] + tribonacci[i + 1] + tribonacci[i + 2];
	}
	return tribonacci;
}
console.log(tribonacciSequence([0, 0, 1], 10));