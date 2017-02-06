/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

const SweetSelector = {
  select: (selector) => {
    let elementList = document.querySelectorAll(selector);
    return elementList
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 const DOM = {
   hide: (selector) => {
     let elementList = document.querySelectorAll(selector);
     let hide;
     for (let i = 0; i < elementList.length; i++){
        hide = elementList[i].style.display = 'none';
     }
     return hide
   },
   show: (selector) => {
     let elementList = document.querySelectorAll(selector);
     let hide;
     for (let i = 0; i < elementList.length; i++){
        hide = elementList[i].style.display = 'block';
     }
     return hide
   },
   addClass: (selector, myClass) => {
     if(selector[0] === '.') {
       let result;
       let elements = document.getElementsByClassName(selector.replace('.', ''))
       for (let i = 0; i < elements.length; i++){
          result = elements[i].classList.add(myClass)
       }
       return result
     }
   },
   removeClass: (selector, myClass) => {
     if(selector[0] === '.') {
       let result;
       let elements = document.getElementsByClassName(selector.replace('.', ''))
       for (let i = 0; i < elements.length; i++){
          result = elements[i].classList.remove(myClass)
       }
       return result
     }
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

const EventDispatcher = {
  on: (selector, myEvent, cb) => {
    if(selector[0] === '.') {
      let elements = document.getElementsByClassName(selector.replace('.', ''))
      for (let i = 0; i < elements.length; i++){
         result = elements[i].addEventListener(myEvent, cb);
      }
      return elements
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

 const AjaxWrapper = {
   request: (objReq, objRes) => {
     const xhr = new XMLHttpRequest();
     xhr.open(objReq.type, objReq.url, true);

     xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
          // Success!
          var resp = xhr.responseText;

          objReq.success(resp)
        } else {
          // We reached our target server, but it returned an error
          objRes.fail()
        }
      };
      xhr.send();
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */


 const miniquery = (selector) => {
   const hide = () => {
     DOM.hide(selector)
   }
   const show = () => {
     DOM.show(selector)
   }
   return ({
     this: SweetSelector.select("#eyed"),
     hide: hide,
     show: show
   })
 }

 const $ = (selector) => {
   const hide = () => {
     DOM.hide(selector)
   }
   const show = () => {
     DOM.show(selector)
   }
   return ({
     this: SweetSelector.select("#eyed"),
     hide: hide,
     show: show
   })
 }
