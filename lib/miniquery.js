/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
  select: function(selected){
    return document.querySelectorAll(selected)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
const DOM = {
  hide: function(item){
    let sel = SweetSelector.select(item)
    if (sel.length > 0){
      sel.forEach(function(klas){
        klas.style.visibility='hidden'
      })
    } else {
      sel.style.visibility='hidden'
    }
  },
  show: function(item){
    let sel = SweetSelector.select(item)
    if (sel.length > 0){
      sel.forEach(function(klas){
        klas.style.visibility='visible'
      })
    } else {
      sel.style.visibility='visible'
    }
  },
  addClass: function(item, klass){
    let sel = SweetSelector.select(item)
    if (sel.length > 0){
      sel.forEach(function(klas){
        klas.classList.add(klass)
      })
    } else {
      sel.classList.add(klass)
    }
  },
  removeClass: function(item, klass){
    let sel = SweetSelector.select(item)
    if (sel.length > 0){
      sel.forEach(function(klas){
        klas.classList.remove(klass)
      })
    } else {
      sel.classList.remove(klass)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher = {
  on: function(item, events, cb){
    let sel = SweetSelector.select(item)
    if (sel.length > 0){
      sel.forEach(function(klas){
        klas.addEventListener(events, cb)
      })
    } else {
      sel.classList.addEventListener(events, cb)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
const AjaxWrapper = {
  request: function(obj){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open(obj.type, obj.url, true)
    httpRequest.onload = function(){
      if(httpRequest.status >= 200 && httpRequest.status < 400){
        var data = httpRequest.responseText
        obj.success(data)
      } else {
        obj.fail()
      }
    }
    httpRequest.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
