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
     if(selecion.startsWith('#')){
       var id = document.getElementById(selecion.slice(1))
       return id
     }
     else if(selecion.startsWith(".")){
       var kelass = document.getElementsByClassName(selecion.slice(1))
       return kelass
     }
     else{
       var tag = document.getElementsByTagName(selecion)
       return tag
     }
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
   },
   show: function(shown){
     var sho = SweetSelector.select(shown)
     for(var i=0; i<sho.length;i++){
       sho[i].style.visibility = 'visible';
     }
   },
   addClass: function(kelas,tambahan){
     var klas = SweetSelector.select(kelas)
     for(var i=0; i<klas.length;i++){
       klas[i].classList.add(tambahan);
     }
   },
   removeClass:  function(kelas2,tambahan2){
     var dua = kelas2+" "+tambahan2
     var klas2 = SweetSelector.select(dua)
     console.log(klas2);
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


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
