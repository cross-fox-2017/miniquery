/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 const SweetSelector = {
   select: function(selector){
     if(selector[0] === "#"){
       return document.getElementById(selector.slice(1))
     }
     else if(selector[0] === "."){
       return document.getElementsByClassName(selector.slice(1))
     }else{
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
   hide: function(selector){
    var div = SweetSelector.select(selector)
    for(var i = 0; i < div.length;i++){
      div[i].style.visibility = "hidden"
    }
  },
  show: function(selector){
   var div = SweetSelector.select(selector)
   for(var i = 0; i < div.length;i++){
     div[i].style.visibility = "visible"
   }
  },
  addClass: function(selector, name){
   var div = SweetSelector.select(selector)
   for(var i = 0; i < div.length;i++){
     div[i].classList.add(name);
   }
  },
  addClass: function(selector, name){
   var div = SweetSelector.select(selector)
   for(var i = 0; i < div.length;i++){
     div[i].classList.remove(name);
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
