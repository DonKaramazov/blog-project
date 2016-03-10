/**
 * Created by Audouze on 10/03/2016.
 */

var popupCenter = function (url,title,width,height) {

    var popupWidth = width || 640;
    var popupHeight =  height ||320;
    var left = window.screenLeft || window.screenX;
    var top = window.screenTop || window.screenY;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;


    var popupLeft = left + windowWidth/2 - popupWidth/2;
    var popupTop = top + windowHeight/2 - popupHeight/2;
    var popup = window.open(url,title,'scrollbars="yes",width=' + popupWidth + ',height='+ popupTop + ',top=' + popupTop + ',left=' + popupLeft);
    popup.focus();
    return true;
}



document.querySelector('.share_twitter').addEventListener('click', function(e) {
    e.preventDefault();
    var url = this.getAttribute('data-url')
    var shareUrl ="https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) +
        "&via=DonKaramazov" +
        "&url=" + encodeURIComponent(url);
    popupCenter(shareUrl,"Partager sur twitter");
})

document.querySelector('.share_facebook').addEventListener('click', function(e) {
    e.preventDefault();
    var url = this.getAttribute('data-url')
    var shareUrl ="https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    popupCenter(shareUrl,"Partager sur facebook");
})