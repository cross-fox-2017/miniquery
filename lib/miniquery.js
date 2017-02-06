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
    if(param[0] == '#') {
      return document.getElementById(param.slice(1));
    } else if (param[0] == '.') {
      return document.getElementsByClassName(param.slice(1));
    } else {
      return document.getElementsByTagName(param);
    }
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
  },
  show: function(param) {
    var a = SweetSelector.select(param);
    for (var i = 0; i < a.length; i++) {
      a[i].style.display = 'block'
    }
  },
  removeClass: function(param, param2) {
    var a = SweetSelector.select(param);
    for (var i = 0; i < a.length; i++) {
      a[i].className = param.slice(1);
    }
  },
  addClass: function(param, param2) {
    var a = SweetSelector.select(param);
    for (var i = 0; i < a.length; i++) {
      a[i].className += ` ${param2}`
    }
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
  request: function(param,param2) {
    var request = new XMLHttpRequest();
    request.open(param1, param2);
    request.onload = function () {
      if(request.status >=200 && request.status < 400) {
        success
      } else {
        fail
      }
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
