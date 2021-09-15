$(document).ready(function(){

	$("#animated-thumbnails")
		.justifiedGallery({
			captions: false,
			lastRow: "justify",
			rowHeight: 230,
			margins: 5
		})
		.on("jg.complete", function () {
			window.lightGallery(
				document.getElementById("animated-thumbnails"),
				{
					autoplayFirstVideo: false,
					pager: false,
					galleryId: "nature",
					plugins: [lgZoom, lgThumbnail],
					mobileSettings: {
						controls: false,
						showCloseIcon: false,
						download: false,
						rotate: false
					}
				}
			);
		});


});