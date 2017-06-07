var $ = require('jquery');
var PhotoSwipe = require('photoswipe');

var openGallery1_Desktop = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'http://res.cloudinary.com/dko7z8caf/image/upload/c_crop,h_200,w_200,x_276,y_87/v1496848820/sample.jpg',
            w: 200,
            h: 200
        },
        {
            src: 'http://res.cloudinary.com/dko7z8caf/image/upload/c_scale,h_683,w_1024,x_276,y_87/v1496848820/sample.jpg',
            w: 1024,
            h: 683
        },
        {
            src: 'img/test_image.jpg',
            w: 600,
            h: 483
        },
        {
            src: 'img/test_image.jpg',
            w: 1024,
            h: 683
        }
    ];

    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen
        history: true,
        focus: true,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

var openGallery2_Desktop = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'http://res.cloudinary.com/dko7z8caf/image/upload/c_crop,h_200,w_200,x_276,y_87/v1496848820/sample.jpg',
            w: 1000,
            h: 1000
        },
        {
            src: 'http://res.cloudinary.com/dko7z8caf/image/upload/c_scale,h_683,w_1024,x_276,y_87/v1496848820/sample.jpg',
            w: 1024,
            h: 683
        },
        {
            src: 'img/test_image.jpg',
            w: 600,
            h: 483
        },
        {
            src: 'img/test_image.jpg',
            w: 1024,
            h: 683
        }
    ];

    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen
        history: true,
        focus: true,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

document.getElementById('btn').onclick = openGallery1_Desktop;
document.getElementById('btn2').onclick = openGallery2_Desktop;
