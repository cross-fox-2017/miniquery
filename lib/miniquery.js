/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

var SweetSelector = {
  select : function (input) {
    return document.querySelectorAll(input)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

var DOM = {
  hide : function (input) {
    var classes = document.querySelectorAll(input);

    for (var i = 0; i < classes.length; i++) {
        classes[i].style.display = 'none';
    }
  },

  show : function (input) {
    var classes = document.querySelectorAll(input);

    for (var i = 0; i < classes.length; i++) {
      if (classes[i].style.display === 'none') {
        classes[i].style.display = 'block';
      }
      else{
        classes[i].style.display = 'none';
      }

    }
  },

  removeClass : function (klass, shaded) {
    var classes = document.querySelectorAll(klass);
    for (var i = 0; i < classes.length; i++) {
      classes[i].remove(klass)
    }
  },

  addClass : function (klass, shaded) {
    var classes = document.querySelectorAll(klass);
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].className == 'klass') {
        classes[i].className += ' ' + shaded
      }
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
var EventDispatcher = {
  on : function(input1, input2, input3) {
    var classes = document.querySelectorAll(input1);
    for (var i = 0; i < classes.length; i++)
      classes[i].addEventListener(input2, input3);
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

 var AjaxWrapper = {
   request: function (obj) {
     var request = new XMLHttpRequest();
     request.open(obj.type, obj.url, true);

     request.onload = function() {
       if (request.status >= 200 && request.status < 400) {
         obj.success(request.responseText)
       } else {
         obj.fail(request.responseText)
       }
     }
       request.send();
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

 function miniquery(input) {
  function hide() {
    DOM.hide(input)
  }
  function show() {
    DOM.show(input)
  }
  return({
    this: SweetSelector.select(input),
    hide: hide,
    show: show
  })
 }

 function $(input) {
  function hide() {
    DOM.hide(input)
  }
  function show() {
    DOM.show(input)
  }
  return({
    this: SweetSelector.select(input),
    hide: hide,
    show: show
  })
 }
