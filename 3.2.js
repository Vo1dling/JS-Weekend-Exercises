function busEnd(numBusStops) {
	let busDecrease = 0;
	for (let i in numBusStops) {
		busDecrease += numBusStops[i][0];
		busDecrease -= numBusStops[i][1];
	}

	busDecrease = busDecrease < 0 ? 0 : busDecrease;
	return busDecrease;
}
console.log(
	busEnd([
		[10, 0],
		[8, 5],
		[15, 6],
		[14, 1],
		[0, 5],
	])
);