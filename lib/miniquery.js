/*!
 * miniquery
 */
 const miniquery = function(item){
   const hide = function(){
     DOM.hide(item)
   }
   const show = function(){
     DOM.show(item)
   }
   return ({
     this: SweetSelector.select(item),
     hide: hide,
     show: show
   })
 }
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
    sel.forEach(function(klas){
      klas.style.visibility='hidden'
    })
  },
  show: function(item){
    let sel = SweetSelector.select(item)
    sel.forEach(function(klas){
      klas.style.visibility='visible'
    })
  },
  addClass: function(item, klass){
    let sel = SweetSelector.select(item)
    sel.forEach(function(klas){
      klas.classList.add(klass)
    })
  },
  removeClass: function(item, klass){
    let sel = SweetSelector.select(item)
    sel.forEach(function(klas){
      klas.classList.remove(klass)
    })
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
 const $ = function(item){
   const hide = function(){
     DOM.hide(item)
   }
   const show = function(){
     DOM.show(item)
   }
   return ({
     this: SweetSelector.select(item),
     hide: hide,
     show: show
   })
 }
