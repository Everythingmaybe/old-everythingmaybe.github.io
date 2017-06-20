$(function() {
	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item",
			horizontalOrder: true,
			//gutter: 10,
		});
	});
});