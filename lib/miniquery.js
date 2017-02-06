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
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
