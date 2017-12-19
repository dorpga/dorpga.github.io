document.querySelectorAll('.CategoryButton').addEventListener('click', function() {
	var c = this.getAttribute('data-value')
	document.querySelectorAll('.PostBox').forEach(function() {
		if (this.getAttribute('data-category') == c) {
			this.style.visibility = 'visible';
		} else {
			this.style.visibility = 'hidden';
		}
	});
});
