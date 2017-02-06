/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 var SweetSelector = {
   select: function(selecion){
     return document.querySelectorAll(selecion)
   }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 var DOM = {
   hide: function(hidden){
     var hid = SweetSelector.select(hidden)
     for(var i=0; i<hid.length;i++){
       hid[i].style.visibility = 'hidden';
     }
     return hidden
   },
   show: function(shown){
     var sho = SweetSelector.select(shown)
     for(var i=0; i<sho.length;i++){
       sho[i].style.visibility = 'visible';
     }
     return shown
   },
   addClass: function(kelas,tambahan){
     var klas = SweetSelector.select(kelas)
     for(var i=0; i<klas.length;i++){
       klas[i].classList.add(tambahan);
     }
   },
   removeClass: function(kelas2,tambahan2){
     var klas2 = SweetSelector.select(kelas2)
     for(var i=0; i<klas2.length;i++){
       klas2[i].classList.remove(tambahan2)
     }

   }
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
 var EventDispatcher ={
   on: function(kelas,eve,func){
     var sel = SweetSelector.select(kelas)
     for(var i=0;i< sel.length;i++){
       sel[i].addEventListener(eve,func)
     }

   }
 }

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
var AjaxWrapper ={
  request: function(postman){
    var sabung = new XMLHttpRequest();
    sabung.open(postman.type,postman.url,true)
    sabung.onload = function() {
    if (sabung.status >= 200 && sabung.status < 400) {
      postman.success(sabung.response)
    } else {
      postman.fail()

      }
  };

    sabung.onerror = function() {

    };

    sabung.send();
  }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
function miniquery(selecion){
  function show(){
    DOM.show(selecion)
  }
  function hide(){
    DOM.hide(selecion)
  }
  return({
    this: SweetSelector.select(selecion),
    show: show,
    hide:hide
  })
}

function $(selecion){
  function show(){
    DOM.show(selecion)
  }
  function hide(){
    DOM.hide(selecion)
  }
  return({
    this: SweetSelector.select(selecion),
    show: show,
    hide:hide
  })
}
