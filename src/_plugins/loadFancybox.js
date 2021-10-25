$(function () {
	function doFancyboxFunctions(event) {
		var loadFancybox = function () {
			if ($("#fancybox-css").length < 1) {
				//load css
				var head = document.getElementsByTagName("head")[0];
				var link = document.createElement("link");
				link.id = "fancybox-css";
				link.rel = "stylesheet";
				link.type = "text/css";
				link.href = "/Data/Sites/1/skins/default/css/jquery.fancybox.min.css";
				link.media = "all";
				$(head).append(link);
			}

			if ($("#fancybox-js").length < 1) {
				//load script
				var resource = document.createElement("script");
				resource.async = "true";
				resource.src = "/Data/Sites/1/skins/default/js/jquery.fancybox.min.js";
				resource.id = "fancybox-js";
				var script = document.getElementsByTagName("script")[0];
				script.parentNode.insertBefore(resource, script);
			}
		};

		var setupFancybox = function () {
			$('[data-fancybox]').fancybox({
				fullScreen: true,
				protect: true,
				thumbs: {
					autoStart: true,
				},
				mobile: {
					thumbs: {
						autoStart: false
					}
				},
				zoom: {
					maxRatio: 5,
				},
				opts: {
					afterShow: function (instance, current) {
						$(".fancybox-is-open").appendTo("form");
					}
				}
			});
		};

		var isFancyboxLoaded = function () {
			return $("html").hasClass("fancybox-css-loaded") && $("html").hasClass("fancybox-js-loaded");
		};

		var startFancybox = function () {
			$("html").addClass("fancybox-is-loaded");

			setupFancybox();
			if (event && event.type === "click") {
				$(event.target).click();
				$(window).resize();
			}
			return true;
		};

		if (event && event.type === "click" && isFancyboxLoaded() === false) event.preventDefault();

		if (!isFancyboxLoaded()) {
			loadFancybox();

			$("#fancybox-css").on("load", function () {
				$("html").addClass("fancybox-css-loaded");
				if (isFancyboxLoaded()) startFancybox();
			});

			$("#fancybox-js").on("load", function () {
				$("html").addClass("fancybox-js-loaded");
				if (isFancyboxLoaded()) startFancybox();
			});
			return false;
		}
	}

	$("[data-fancybox]").one("click mouseenter", function (event) {
		doFancyboxFunctions(event);
	});

	if (window.location.hash) {
		var hash = window.location.hash.substr(1);
		var getFancyboxSelector = function () {
			var selector = hash.split('-');
			selector.pop();

			return selector.join('-');
		};
		var fancyboxElementsWithCurrentHash = $('[data-fancybox^="' + getFancyboxSelector() + '"]');
		if (fancyboxElementsWithCurrentHash.length > 0) doFancyboxFunctions();
	}
});

// setting fancubox modal 
// function fancyboxModal() {
// 	$(".button-apply a").click(function (e) {
// 		e.preventDefault();
// 		$.fancybox.open({
// 			src: '#form-apply',
// 			type: 'inline',
// 			opts: {
// 				afterShow: function (instance, current) {
// 					$(".fancybox-is-open").appendTo("main");
// 				}
// 			}
// 		});
// 		return false;
// 	});
// }