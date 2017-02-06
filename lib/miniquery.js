/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
var SweetSelector = {
  select: function(param) {
    return document.querySelectorAll(param);
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
var DOM = {
  hide: function(param) {
    var a = SweetSelector.select(param);
    for (var i = 0; i < a.length; i++) {
      a[i].style.display = 'none'
    }
    return param
  },
  show: function(param) {
    var a = SweetSelector.select(param);
    for (var i = 0; i < a.length; i++) {
      a[i].style.display = 'block'
    }
    return param
  },
  removeClass: function(param, param2) {
    var a = SweetSelector.select(param);
    for (var i = 0; i < a.length; i++) {
      a[i].className = param.slice(1);
    }
    return param
  },
  addClass: function(param, param2) {
    var a = SweetSelector.select(param);
    for (var i = 0; i < a.length; i++) {
      a[i].className += ` ${param2}`
    }
    return param
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
var EventDispatcher = {
  on: function (param, param2, cb) {
    var a = SweetSelector.select(param);
    for (var i = 0; i < a.length; i++) {
      a[i].addEventListener(param2, cb)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
var AjaxWrapper = {
  request: function(object) {
    var request = new XMLHttpRequest();
    request.open(object.type, object.url);
    request.onload = function () {
      if(request.status >=200 && request.status < 400) {
        object.success(request.response)
      } else {
        object.fail()
      }
    }
    request.onerror = function() {
      // There was a connection error of some sort
    };
    request.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
 function miniquery(selection) {
   function show() {
     DOM.show(selection)
   }
   function hide() {
     DOM.hide(selection)
   }
   return({
     this: SweetSelector.select(selection),
     show: show,
     hide: hide
   })
 }

 function $(selection) {
   function show() {
     DOM.show(selection)
   }
   function hide() {
     DOM.hide(selection)
   }
   return({
     this: SweetSelector.select(selection),
     show: show,
     hide: hide
   })
 }
