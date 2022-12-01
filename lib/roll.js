// exportable main file with dice-rolling functions

// sides is the number of sides in a dice, die is the number of dice, rolls is num of rolls
// this function returns an object with the information after a "roll". results[] store the sum of the die rolled.
export function roll(sides, dice, rolls) {
	let results = [];
	for (var i = 0; i < rolls; i++) {
		let sum = 0;
		for (var j = 0; j < dice; j++) {
			sum += Math.floor(Math.random() * sides) + 1;
		}
		results[i] = sum;
	}
	var rollObject = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: results
	}
	return JSON.stringify(rollObject);
}
