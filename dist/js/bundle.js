(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var openPhotoSwipe = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [{
        src: 'img/test_image.jpg',
        w: 964,
        h: 1024
    }, {
        src: 'img/test_image.jpg',
        w: 1024,
        h: 683
    }, {
        src: 'img/test_image.jpg',
        w: 600,
        h: 483
    }, {
        src: 'img/test_image.jpg',
        w: 1024,
        h: 683
    }];

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxpQkFBaUIsWUFBVztBQUM1QixRQUFJLGNBQWMsU0FBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxDQUFuQyxDQUFsQjs7QUFFQTtBQUNBLFFBQUksUUFBUSxDQUNSO0FBQ0ksYUFBSyxvQkFEVDtBQUVJLFdBQUcsR0FGUDtBQUdJLFdBQUc7QUFIUCxLQURRLEVBTVI7QUFDSSxhQUFLLG9CQURUO0FBRUksV0FBRyxJQUZQO0FBR0ksV0FBRztBQUhQLEtBTlEsRUFXUjtBQUNJLGFBQUssb0JBRFQ7QUFFSSxXQUFHLEdBRlA7QUFHSSxXQUFHO0FBSFAsS0FYUSxFQWdCUjtBQUNJLGFBQUssb0JBRFQ7QUFFSSxXQUFHLElBRlA7QUFHSSxXQUFHO0FBSFAsS0FoQlEsQ0FBWjs7QUF1QkE7QUFDQSxRQUFJLFVBQVU7QUFDTDtBQUNMLGlCQUFTLElBRkM7QUFHVixlQUFPLElBSEc7O0FBS1YsK0JBQXVCLENBTGI7QUFNViwrQkFBdUI7O0FBTmIsS0FBZDs7QUFVQSxRQUFJLFVBQVUsSUFBSSxVQUFKLENBQWUsV0FBZixFQUE0QixvQkFBNUIsRUFBa0QsS0FBbEQsRUFBeUQsT0FBekQsQ0FBZDtBQUNBLFlBQVEsSUFBUjtBQUNILENBeENEOztBQTBDQSxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsT0FBL0IsR0FBeUMsY0FBekMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG9wZW5QaG90b1N3aXBlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBzd3BFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBzd3AnKVswXTtcblxuICAgIC8vIGJ1aWxkIGl0ZW1zIGFycmF5XG4gICAgdmFyIGl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdpbWcvdGVzdF9pbWFnZS5qcGcnLFxuICAgICAgICAgICAgdzogOTY0LFxuICAgICAgICAgICAgaDogMTAyNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdpbWcvdGVzdF9pbWFnZS5qcGcnLFxuICAgICAgICAgICAgdzogMTAyNCxcbiAgICAgICAgICAgIGg6IDY4M1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdpbWcvdGVzdF9pbWFnZS5qcGcnLFxuICAgICAgICAgICAgdzogNjAwLFxuICAgICAgICAgICAgaDogNDgzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ2ltZy90ZXN0X2ltYWdlLmpwZycsXG4gICAgICAgICAgICB3OiAxMDI0LFxuICAgICAgICAgICAgaDogNjgzXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgLy8gZGVmaW5lIG9wdGlvbnMgKGlmIG5lZWRlZClcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAvLyBoaXN0b3J5ICYgZm9jdXMgb3B0aW9ucyBhcmUgZGlzYWJsZWQgb24gQ29kZVBlblxuICAgICAgICBoaXN0b3J5OiB0cnVlLFxuICAgICAgICBmb2N1czogdHJ1ZSxcblxuICAgICAgICBzaG93QW5pbWF0aW9uRHVyYXRpb246IDAsXG4gICAgICAgIGhpZGVBbmltYXRpb25EdXJhdGlvbjogMFxuXG4gICAgfTtcblxuICAgIHZhciBnYWxsZXJ5ID0gbmV3IFBob3RvU3dpcGUocHN3cEVsZW1lbnQsIFBob3RvU3dpcGVVSV9EZWZhdWx0LCBpdGVtcywgb3B0aW9ucyk7XG4gICAgZ2FsbGVyeS5pbml0KCk7XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuJykub25jbGljayA9IG9wZW5QaG90b1N3aXBlO1xuIl19
