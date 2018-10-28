
$(".responsive-row").on("click", function () {
	if ($(this).hasClass('row-open')) {
		$(this).animate({
			maxHeight: '65px'
		}, 500).removeClass('row-open').find('.toggle-button').html('<i class=\"fas fa-angle-down\"></i>');
	} else {
		$(this).animate({
			maxHeight: '1000px'
		}, 500).addClass('row-open').find('.toggle-button').html('<i class=\"fas fa-angle-up\"></i>');
	}
});

