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

$(document).ready(function(){

    images = [
        "TOD/TOD-AUTOMATICO.png",
        "OFM/OFM-cover.png",
        // "https://cdn.dribbble.com/userupload/9184753/file/original-72edcb64118637b179fff0bd947e84b9.png",
        // "https://cdn.dribbble.com/userupload/9744620/file/original-989de0234b15140bce4fdef49a1c5e10.png",
        // "https://cdn.dribbble.com/users/545884/screenshots/4356121/darko--dr.jpg",
        // "https://cdn.dribbble.com/users/545884/screenshots/3695553/news.png"
        ];

    links = [
        "./projects/tod.html",
        "./projects/ofm.html",
        // "./projects/tod.html"
        ];
    
    console.log(images[i]);
    for (var i = images.length - 1; i >= 0; i--) {
        console.log(getFilenameAndExtension(images[i]));
    }
    
    let mainWrapper = document.getElementById("imagesdiv");
    let imageclass = "border-2 hover:border-rose-500";

    // var link = create("a", {
    //     className: "scoreboard-video-outer-link",
    //     url: "google.com"
    // });

    for (var i = 0; i < images.length; i++) {

        var wholediv = create("div", {id: "wholediv"});
        var link = create("a", {href: links[i], target: "_blank"});
        var thmbnl = create("img", {className: imageclass, src: images[i], alt: "Image1"});

        ac(mainWrapper, ac(wholediv, ac(link, thmbnl)));
                
            }

});