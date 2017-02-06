/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
  select: function (selector) {
    if (selector[0] === '#') {
      let getID = selector.slice(1)
      console.log(getID)
      return document.getElementById(getID)
    }else if (selector[0] === '.') {
      let getCLASS = selector.slice(1)
      return document.getElementsByClassName(getCLASS)
    }else {
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
  hide: function (selector) {
    let value = selector.slice(1)

    let results = document.getElementsByClassName(value)
    for (let i = 0;i < results.length;i++) {
      results[i].style.display = 'none'
    }
  },
  show: function (selector) {
    let value = selector.slice(1)

    let results = document.getElementsByClassName(value)
    for (let i = 0;i < results.length;i++) {
      results[i].style.display = 'block'
    }
  },
  removeClass: function (selector, secondClass) {
    let value = selector.slice(1)

    let results = document.getElementsByClassName(value)

    for (let i = 0;i < results.length;i++) {
      results[i].classList.remove(secondClass)
    }
  },

  addClass: function (selector, secondClass) {
    let value = selector.slice(1)

    let results = document.getElementsByClassName(value)

    for (let i = 0;i < results.length;i++) {
      results[i].className += ' ' + secondClass
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
