/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

var SweetSelector = {
  select : function (input) {
    return document.querySelectorAll(input)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

var DOM = {
  hide : function (input) {
    var classes = document.querySelectorAll(input);

    for (var i = 0; i < classes.length; i++) {
        classes[i].style.display = 'none';
    }
  },

  show : function (input) {
    var classes = document.querySelectorAll(input);

    for (var i = 0; i < classes.length; i++) {
      if (classes[i].style.display === 'none') {
        classes[i].style.display = 'block';
      }
      else{
        classes[i].style.display = 'none';
      }

    }
  },

  removeClass : function (klass, shaded) {
    var classes = document.querySelectorAll(klass);
    for (var i = 0; i < classes.length; i++) {
      classes[i].remove(klass)
    }
  },

  addClass : function (klass, shaded) {
    var classes = document.querySelectorAll(klass);
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].className == 'klass') {
        classes[i].className += ' ' + shaded
      }
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
