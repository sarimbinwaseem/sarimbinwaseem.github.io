function create(tagName, props) {
  return Object.assign(document.createElement(tagName), (props || {}));
}

function ac(p, c) {
  if (c) p.appendChild(c);
  return p;
}

$(document).ready(function(){

    images = [
        "https://cdn.dribbble.com/users/545884/screenshots/3981307/lorena2.png",
        "https://cdn.dribbble.com/users/545884/screenshots/3981307/lorena2.png",
        "https://cdn.dribbble.com/userupload/9184753/file/original-72edcb64118637b179fff0bd947e84b9.png",
        "https://cdn.dribbble.com/userupload/9744620/file/original-989de0234b15140bce4fdef49a1c5e10.png",
        "https://cdn.dribbble.com/users/545884/screenshots/4356121/darko--dr.jpg",
        "https://cdn.dribbble.com/users/545884/screenshots/3695553/news.png"];
    
    console.log(images[i]);
    
    let mainWrapper = document.getElementById("imagesdiv");
    let imageclass = "rounded-full border-2 hover:border-rose-500";

    // var link = create("a", {
    //     className: "scoreboard-video-outer-link",
    //     url: "google.com"
    // });

    for (var i = 0; i < images.length; i++) {

        var wholediv = create("div", {id: "wholediv"});
        var link = create("a", {href: images[i]});
        var thmbnl = create("img", {className: imageclass, src: images[i], alt: "Image1"});

        ac(mainWrapper, ac(wholediv, ac(link, thmbnl)));
                
            }

});