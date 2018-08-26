// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a').each(function (i) {
        if ($(this).hasClass('page-scroll')) {
            var target = $(this);
            target.bind('click', function (i) {
                $('html, body').stop().animate({
                    scrollTop: $(target.attr('href')).offset().top
                }, 1000, 'easeInOutExpo');
                i.preventDefault();
            });
        }
    });
});

//Background color picker for Member-card
$(function () {
    $('.member-card').each(function (i) {
        var target = $(this);
        var src = target.css('background-image').slice(4, -1).replace(/"/g, "");
        var img = new Image;
        img.onload = function () {
            var thief = new BackgroundColorTheif();
            var arr = thief.getBackGroundColor(img);
            var rgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
            target.css('background-color', rgb);
        }
        img.src = src;
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});