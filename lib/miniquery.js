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
    if (select[0] === '#') {
      let name = select.substr(1)
      return document.getElementById(name)
    } else if (select[0] === '.') {
      let name = select.substr(1)
      return document.getElementsByClassName(name)
    } else {
      return document.getElementsByTagName(select)
    }
  }
}
// querySelectorAll buat select semua

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
  },
  show: function (select) {
    let sweet = SweetSelector.select(select)
    for (let i = 0; i < sweet.length; i++) {
      sweet[i].style.display = 'block'
    }
  },
  addClass: function (select, style) {
    let sweet = SweetSelector.select(select)
    for (let i = 0; i < sweet.length; i++) {
      sweet[i].classList.add(style)
    }
  },
  removeClass: function (select, style) {
    let sweet = SweetSelector.select(select)
    for (let i = 0; i < sweet.length; i++) {
      sweet[i].classList.remove(style)
    }
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
        object.fail(request.responseText)
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
