document.querySelectorAll(".cell").forEach((element) => {
	element.style.backgroundColor =
		"rgb(" +
		Math.floor(Math.random() * 255) +
		"," +
		+Math.floor(Math.random() * 255) +
		"," +
		+Math.floor(Math.random() * 255) +
		")";
});
