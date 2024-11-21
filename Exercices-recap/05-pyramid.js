/* En utilisant le langage JavaScript, créez une fonction pyramid(size) qui permet de dessiner une pyramide dans le terminal.

e

 */

function drawPyramid(size) {
	for (let i = 1; i <= size; i++) {
		let char = "# ";
		let space = "  ";
		console.log(space.repeat(size - i) + char.repeat(i * 2 - 1));
	}
}

drawPyramid(4);
