function create(tagName, props) {
  return Object.assign(document.createElement(tagName), (props || {}));
}

function ac(p, c) {
  if (c) p.appendChild(c);
  return p;
}

function getFilenameAndExtension(pathfilename){

  var filenameextension = pathfilename.replace(/^.*[\\\/]/, '');
  var filename = filenameextension.substring(0, filenameextension.lastIndexOf('.'));
  var ext = filenameextension.split('.').pop();
  
  return [filename, ext];

}

let videos = ["../TOD/todinaction.mp4"];

let images = [
    "https://cdn.dribbble.com/users/545884/screenshots/3981307/lorena2.png",
    "https://cdn.dribbble.com/userupload/9184753/file/original-72edcb64118637b179fff0bd947e84b9.png",
    "https://cdn.dribbble.com/userupload/9744620/file/original-989de0234b15140bce4fdef49a1c5e10.png",
    "https://cdn.dribbble.com/users/545884/screenshots/4356121/darko--dr.jpg",
    "https://cdn.dribbble.com/users/545884/screenshots/3695553/news.png"];

console.log(images[i]);
for (var i = images.length - 1; i >= 0; i--) {
    console.log(getFilenameAndExtension(images[i]));
}
let imageclass = "border-2 hover:border-rose-500";
let videoclass = "vid";
$(document).ready(function(){

    
    let mainWrapper = document.getElementById("imagesdiv");
    

    // var link = create("a", {
    //     className: "scoreboard-video-outer-link",
    //     url: "google.com"
    // });

    for (var i = 0; i < videos.length; i++) {

        var wholediv = create("div", {id: "wholediv"});
        var link = create("a", {href: videos[i]});
        var thmbnl = create("video", {className: videoclass, 
            src: videos[i], alt: "Video",type: "video/mp4"});

        ac(mainWrapper, ac(wholediv, ac(link, thmbnl)));
                
            }

    for (var i = 0; i < images.length; i++) {

        var wholediv = create("div", {id: "wholediv"});
        var link = create("a", {href: images[i]});
        var thmbnl = create("img", {className: imageclass, src: images[i], alt: "Image1"});

        ac(mainWrapper, ac(wholediv, ac(link, thmbnl)));
                
            }
var attr = document.createAttribute('muted');
let clip = document.querySelector(".vid")
clip.setAttributeNode(attr);
clip.addEventListener("mouseover", function (e) {
    clip.play();
});
clip.addEventListener("mouseout", function (e) {
    clip.pause();
});

});
