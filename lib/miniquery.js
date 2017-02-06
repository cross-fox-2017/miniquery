/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

var SweetSelector = {
    select: function(input) {
        return document.querySelectorAll(input)
    }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
var DOM = {
    hide: function(input) {
        var arrClass = document.querySelectorAll(input)
        for (var i = 0; i < arrClass.length; i++) {
            arrClass[i].style.display = "none"
        }
    },
    show: function(input) {
        var arrClass = document.querySelectorAll(input)
        for (var i = 0; i < arrClass.length; i++) {
            if (arrClass[i].style.display == "none") {
                arrClass[i].style.display = "block"
            } else {
                arrClass[i].style.display = "none"
            }
        }
    },
    removeClass: function(input, input1) {
        var arrClass = document.querySelectorAll(input)
        for (var i = 0; i < arrClass.length; i++) {
          if(`.${arrClass[i].className}` == input){
            arrClass[i].remove(input)
          }
        }
    },
    addClass: function(input, input1) {
        var arrClass = document.querySelectorAll(input)
        for (var i = 0; i < arrClass.length; i++) {
          if(`.${arrClass[i].className}` == input){
            arrClass[i].className += ' '+input1
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
   on: function(input, eventHandler, cb) {
      var arrClass = document.querySelectorAll(input)
      for (var i = 0; i < arrClass.length; i++) {
        arrClass[i].addEventListener(eventHandler, cb)
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
      request.open(object.type,object.url, true)
      request.onload = function() {
        if(request.status >= 200 && request.status <400 ){
          // data = JSON.parse(request.responseText)
          object.success(request.responseText)
        }else{
          object.fail(request.responseText)
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
   return ({
     this:SweetSelector.select(input),
     hide:hide,
     show:show
   })
 }

 function $(input) {
   function hide() {
      DOM.hide(input)
   }
   function show() {
      DOM.show(input)
   }
   return ({
     this:SweetSelector.select(input),
     hide:hide,
     show:show
   })
 }
