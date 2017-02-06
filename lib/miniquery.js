/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {
  static select (data) {
    let parameter = ''
    if (data[0] == '#') {
      let parameter = data.split('#')
      return document.getElementById(`${parameter[1]}`)
    }else if (data[0] == '.') {
      let parameter = data.split('.')
      return document.getElementsByClassName(`${parameter[1]}`)
    }else {
      return document.getElementsByTagName(`${data}`)[0].innerHTML
    }
  } // end select
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

//  class DOM {
//   static hide(param){
//     if(param.length > 1){
//       var selector = param.split("")[0]
//       param = param.slice(1)
//     }
//     if(selector === "#"){
//       document.getElementById(`${param}`).style.display = "none"
//     }else if(selector === '.'){
//       var klass = document.getElementsByClassName(`${param}`)
//       for (var i = 0; i < klass.length; i++) {
//         klass[i].style.display = "none"
//       }
//     }else{
//       document.getElementsByTagName(`${param}`)[0].style.display = "none"
//     }
//   }
//
//   static show(param){
//     if(param.length > 1){
//       var selector = param.split("")[0]
//       param = param.slice(1)
//     }
//     if(selector === "#"){
//       document.getElementById(`${param}`).style.display = ""
//     }else if(selector === '.'){
//       var klass = document.getElementsByClassName(`${param}`)
//       for (var i = 0; i < klass.length; i++) {
//         klass[i].style.display = ""
//       }
//     }else{
//       document.getElementsByTagName(`${param}`)[0].style.display = ""
//     }
//   }
//
//   static addClass(first_class, additional){
//     first_class = first_class.slice(1)
//
//     var klass = document.getElementsByClassName(`${first_class}`)
//     for (var i = 0; i < klass.length; i++) {
//       klass[i].classList.add(additional)
//
//       console.log(klass[i])
//     }
//   }
//
//   static removeClass(first_class, additional){
//     first_class = first_class.slice(1)
//
//     var klass = document.getElementsByClassName(`${first_class}`)
//     for (var i = 0; i < klass.length; i++) {
//       klass[i].classList.remove(additional)
//       console.log(klass[i])
//     }
//   }
// }

class DOM {

  // hide function
  static hide (data) {
    console.log('hide')
    let parameter = ''
    let klass = ''
    if (data[0] == '#') {
      let parameter = data.split('#')
      klass = document.getElementById(`${parameter[1]}`)
      klass.style.display = 'none'
    }else if (data[0] == '.') {
      let parameter = data.split('.')
      klass = document.getElementsByClassName(`${parameter[1]}`)
      for (let i = 0; i < klass.length; i++) {
        klass[i].style.display = 'none'
      }
    }else {
      klass = document.getElementsByTagName(`${data}`)

      for (let i = 0; i < klass.length; i++) {
        klass[i].style.display = 'none'
      } // end loop
    }
  } // end hide function

  // show function
  static show (data) {
    console.log('show')
    let parameter = ''
    let klass = ''
    if (data[0] == '#') {
      let parameter = data.split('#')
      klass = document.getElementById(`${parameter[1]}`)
      klass.style.display = ''
    }else if (data[0] == '.') {
      let parameter = data.split('.')
      klass = document.getElementsByClassName(`${parameter[1]}`)
      for (let i = 0; i < klass.length; i++) {
        klass[i].style.display = ''
      }
    }else {
      klass = document.getElementsByTagName(`${data}`)

      for (let i = 0; i < klass.length; i++) {
        klass[i].style.display = ''
      } // end loop
    }
  } // end show function

  // add class function
  static addClass (Class, additional) {
    console.log('add class')
    Class = Class.slice(1)

    var klass = document.getElementsByClassName(`${Class}`)

    console.log(klass)

    for (var i = 0; i < klass.length; i++) {
      klass[i].classList.add(additional)
    }
  } // end add class function

  // remove class function
  static removeClass (Class, additional) {
    console.log('remove')
    Class = Class.slice(1)

    var klass = document.getElementsByClassName(`${Class}`)

    console.log(klass)

    for (var i = 0; i < klass.length; i++) {
      klass[i].classList.remove(additional)
    }
  } // end remove class function

}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
// event listerner is to add event to the element your want, to do some thing

// just efect with class, can't with id
class EventDispatcher {
  // input Ex : EventDispatcher.on('.klass', 'click', function() {})
  static on (Class, Event, cb) {
    let data = Class.slice(1)

    if (Event == 'click') {
      // var Class value is .klass then using slice(1) will make it into klass)
      let value = document.getElementsByClassName(`${data}`)
      for (let i = 0; i < value.length; i++) {
        document.getElementsByClassName(`${data}`)[i].addEventListener('click', cb)
      }
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

class AjaxWrapper {
  static request (data) {
    var xhr = new XMLHttpRequest(data)
    xhr.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        data.success(this.responseText)
      }else {
        data.fail(this.responseText)
      }
    }
    xhr.open('GET', data.url, true)
    xhr.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

// alias using miniquery
function miniquery (parameter) {
  function hide () {
    // method chaning
    return DOM.hide(parameter)
  }

  function show () {
    // method chaning
    return DOM.show(parameter)
  }

  return (
  {
    this: SweetSelector.select(parameter),
    hide: hide,
    show: show
  }
  )
}

// alias using $
function $ (parameter) {
  function hide () {
    // method chaning
    return DOM.hide(parameter)
  }

  function show () {
    // method chaning
    return DOM.show(parameter)
  }

  return (
  {
    this: SweetSelector.select(parameter),
    hide: hide,
    show: show
  }
  )
}
