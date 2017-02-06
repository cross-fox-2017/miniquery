/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
  select : function(selector){
    if (selector[0] === "#") {
      return document.getElementById(selector.slice(1))
    }
    else if (selector[0] === ".") {
      return document.getElementsByClassName(selector.slice(1))
    }
    else {
      return document.getElementsByTagName(selector)
    }
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 const DOM = {
   hide : function(selector){
    var div = SweetSelector.select(selector)
    for (var i = 0; i < div.length; i++) {
      div[i].style.visibility = "hidden"
    }
  },
   show : function(selector){
    var div = SweetSelector.select(selector)
    for (var i = 0; i < div.length; i++) {
      div[i].style.visibility = "visible"
    }
  },
   addClass : function(selector,name){
    var div = SweetSelector.select(selector)
    for (var i = 0; i < div.length; i++) {
      div[i].classList.add(name)
    }
  },
  removeClass : function(selector,name){
   var div = SweetSelector.select(selector)
   for (var i = 0; i < div.length; i++) {
     div[i].classList.remove(name)
   }
  }
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher = {
  on: function(selector,event,cb){
    var div = SweetSelector.select(selector)
    for (var i = 0; i < div.length; i++) {
      div[i].addEventListener(event, cb)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
const AjaxWrapper = {
  request : function(obj){
  var request = new XMLHttpRequest()
  request.open(obj.type,obj.url,true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      obj.success(request.responseText)
    } else {
      // We reached our target server, but it returned an error
      obj.fail(request.responseText)
    }
  }
  request.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
