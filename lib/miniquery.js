/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
  select: function (select) {
    return document.querySelectorAll(select)
    // if (select[0] === '#') {
    //   let name = select.substr(1)
    //   return document.getElementById(name)
    // } else if (select[0] === '.') {
    //   let name = select.substr(1)
    //   return document.getElementsByClassName(name)
    // } else {
    //   return document.getElementsByTagName(select)
    // }
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
const DOM = {
  hide: function (select) {
    let sweet = SweetSelector.select(select)
    for (let i = 0; i < sweet.length; i++) {
      sweet[i].style.display = 'none'
    }
    return sweet
  },
  show: function (select) {
    let sweet = SweetSelector.select(select)
    for (let i = 0; i < sweet.length; i++) {
      sweet[i].style.display = 'block'
    }
    return sweet
  },
  addClass: function (select, style) {
    let sweet = SweetSelector.select(select)
    for (let i = 0; i < sweet.length; i++) {
      sweet[i].classList.add(style)
    }
    return sweet
  },
  removeClass: function (select, style) {
    let sweet = SweetSelector.select(select)
    for (let i = 0; i < sweet.length; i++) {
      sweet[i].classList.remove(style)
    }
    return sweet
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher = {
  on: function (select, action, cb) {
    let sweet = SweetSelector.select(select)
    for (let i = 0; i < sweet.length; i++) {
      sweet[i].addEventListener(action, cb)
    }
    return sweet
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
const AjaxWrapper = {
  request: function (object) {
    var request = new XMLHttpRequest()
    request.open(object.type, object.url, true)

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        // var resp = request.responseText;
        object.success(request.responseText)
      } else {
        // We reached our target server, but it returned an error
        object.fail()
      }
    }
    request.send()
  }
}
/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

const miniquery = (selector) => {
  function hide () {
    DOM.hide(selector)
  }

  function show () {
    DOM.show(selector)
  }

  function addClass () {
    DOM.addClass(selector)
  }

  function removeClass () {
    DOM.removeClass(selector)
  }

  return ({
    this: SweetSelector.select(selector),
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  })
}

const $ = (selector) => {
  function hide () {
    DOM.hide(selector)
  }

  function show () {
    DOM.show(selector)
  }

  function addClass () {
    DOM.addClass(selector)
  }

  function removeClass () {
    DOM.removeClass(selector)
  }
  function on () {
    EventDispatcher.on(selector, action, cb)
  }

  return ({
    this: SweetSelector.select(selector),
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass,
    on: on
  })
}
