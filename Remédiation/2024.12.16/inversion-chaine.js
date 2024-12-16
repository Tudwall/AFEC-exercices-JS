const revert = (str) => {
	const revertedString = str.split("").reverse().join("");
	return revertedString;
};

console.log(revert("Hello World"));
