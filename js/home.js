$(".CategoryButton").click(function() {
	var c = $(this).attr("data-value");
	$(".PostBox").hide();
	$(".PostBox[data-category="+c+"]").show();
});
