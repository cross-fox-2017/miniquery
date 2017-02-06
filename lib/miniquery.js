/*!
 * miniquery
 */
const minique = function (selector) {
  function hide () {
    DOM.hide(selector)
  }
  function show () {
    DOM.show(selector)
  }

  return ({
    this: SweetSelector.select(selector),
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
  select: function (selector) {
    return document.querySelectorAll(selector)

  // if (selector[0] === '#') {
  //   let getID = selector.slice(1)
  //   return document.getElementById(getID)
  // }else if (selector[0] === '.') {
  //   let getCLASS = selector.slice(1)
  //   return document.getElementsByClassName(getCLASS)
  // }else {
  //   return document.getElementsByTagName(selector)
  // }
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
const DOM = {
  hide: function (selector) {
    let results = SweetSelector.select(selector)

    for (let i = 0;i < results.length;i++) {
      results[i].style.display = 'none'
    }
  },

  show: function (selector) {
    let results = SweetSelector.select(selector)
    for (let i = 0;i < results.length;i++) {
      results[i].style.display = 'block'
    }
  },
  removeClass: function (selector, secondClass) {
    let results = SweetSelector.select(selector)

    for (let i = 0;i < results.length;i++) {
      results[i].classList.remove(secondClass)
    }
  },

  addClass: function (selector, secondClass) {
    let results = SweetSelector.select(selector)

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
const EventDispatcher = {
  on: function (selector , eventName, callback) {
    let elements = SweetSelector.select(selector)

    for (let i = 0; i < elements.length;i++) {
      elements[i].addEventListener(eventName, callback)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
const AjaxWrapper = {
  request: function (objectRequest) {
    var req = new XMLHttpRequest()
    req.open(objectRequest.type, objectRequest.url, true)

    req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
        // Success!
        var resp = req.responseText
        objectRequest.success(resp)
      } else {
        objectRequest.fail()
      }
    }

    req.onerror = function () {
      objectRequest.fail()
    }

    req.send()
  }

}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
