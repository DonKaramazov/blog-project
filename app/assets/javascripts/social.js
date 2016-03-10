/**
 * Created by Audouze on 10/03/2016.
 */
document.querySelector('.share_twitter').addEventListener('click', function(e) {
    e.preventDefault();
    console.log("salut")
    var url ="https://twitter.com/intent/tweet?text=Hello%20world";
    window.open(url,"Partage");
})