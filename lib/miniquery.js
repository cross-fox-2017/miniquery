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
    if(selector[0] === '#') {
      return document.getElementById(selector.replace('#', ''))
    } else if(selector[0] === '.') {
      return document.getElementsByClassName(selector.replace('.', ''))
    } else {
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
   hide: (selector) => {
     if(selector[0] === '.') {
       let hide;
       let elements = document.getElementsByClassName(selector.replace('.', ''))
       for (let i = 0; i < elements.length; i++){
          hide = elements[i].style.display = 'none';
       }
       return hide
     }
   },
   show: (selector) => {
     if(selector[0] === '#') {
       let show;
       let elements = document.getElementsByClassName(selector.replace('.', ''))
       for (let i = 0; i < elements.length; i++){
          hide = elements[i].style.display = 'block';
       }
       return hide
     }
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

   }
 }


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
