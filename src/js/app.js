var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'img/test_image.jpg',
            w: 964,
            h: 1024
        },
        {
            src: 'img/test_image.jpg',
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

document.getElementById('btn').onclick = openPhotoSwipe;
