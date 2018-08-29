//微信分享
var shareTitle = '签到7天送10元，话费还能这样领！';
var shareTips = '签到就能送话费，10元免费送给你，数量有限，快来领取！';
var shareImage = 'http://m.miguvideo.com/wap/resource/migu/hbActivity/image/icon.jpg';

$.weixinSecondShare(shareTitle,
    shareTips,
    "../image/icon.jpg");
$(".broswerTip").click(function() {
    $(".broswerTip").hide();
});

function weibo() {
    var backUrl = location.href;
    window.location.href = 'http://v.t.sina.com.cn/share/share.php?title=' +
        shareTitle + '&url=' + backUrl + '&content=utf-8&sourceUrl=' +
        backUrl + '&pic=' + shareImage;
}

function weixin() {
    if (isWeiXin()) {
        $(".broswerTip").show();
        $("#shareModule").hide();
    } else {
        alert("请使用浏览器分享");
    }
}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

function cancelShare() {
	event.stopPropagation();
	if (event.target.getAttribute('data-target') === 'close') {
	    $('.shareModule').hide();
	}
}
function openShare() {
    $('.shareModule').show();
}