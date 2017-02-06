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

 // class Alias {
 //   constructor(selector) {
 //     this.selector = selector
 //   }
 //   hide() {
 //     if(this.selector[0] === '#') {
 //       let element = this.selector.slice(1)
 //       let result =  document.getElementById(element).style.display = 'none';
 //       return this
 //     }
 //   }
 // }
 //
 // const miniquery = new Alias()
 // miniquery("#eyed").hide()

 const miniquery = (selector) => {

   const hide = (selector) => {
     DOM.hide(selector)
   }

   return {
     hide: hide
   }
 }

  // const Miniquery = function(selector) {
  //   this.selector = selector;
  //   // this.result;
  // };
  //
  // Miniquery.prototype.hide = function() {
  //   let selector =  this.selector.slice(1);
  //   let result = document.getElementById(selector).style.display = 'none'
  //   // this.result = result
  //   return selector;
  // };
  //
  // const miniquery = new Miniquery();
  // console.log(miniquery("#eyed").hide());
