document.querySelectorAll('.CategoryButton').forEach(function(i) {
	i.addEventListener('click', function() {
		var c = i.getAttribute('data-value')
		document.querySelectorAll('.PostBox').forEach(function(j) {
			if (j.getAttribute('data-category') == c) {
				j.style.display = 'initial';
			} else {
				j.style.display = 'none';
			}
		});
	})
});
