const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(
	".hidden-left, .hidden-right, .hidden-up"
);

hiddenElements.forEach((element) => {
	observer.observe(element);
});
