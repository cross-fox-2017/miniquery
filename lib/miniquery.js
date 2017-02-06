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
    }  },
  addClass: function(item, klass){

  },
  removeClass: function(item, klass){

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
