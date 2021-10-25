function fbs_click(width, height) {
	let leftPosition, topPosition;
	leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
	topPosition = (window.screen.height / 2) - ((height / 2) + 50);
	let windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=no,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
	let u = location.href;
	let t = document.title;
	window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', windowFeatures);
	return false;
}
// exp Html
/* <a href="http://www.catnghi.vn/tin-tuc/ban-tin-cong-ty/soi-dong-cuoc-thi-boi--suc-khoe-gan-ket" onclick="return fbs_click(626, 305)" target="_blank" title="Share">
	<em class="ri-facebook-box-fill">
	</em>
</a> */

// button on click popop new window
$(".facebook,.google").on('click', function() {
	var url = $(this).data('url');
	window.open(url, "popupWindow", "width=660,height=480,scrollbars=yes");
	return false;
});