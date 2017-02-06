
   var SweetSelector = {

     select: function(input){
      //  var index = input[0];
       var value = "";
       var max = 0
       var value = "";
       max = input.length;
       value = input.substring(1, max);

       if(input[0] == '#'){
         console.log(document.getElementById(value))
         return document.getElementById(value)
       }else if(input[0] == '.'){
         console.log(document.getElementsByClassName(value));
         return document.getElementsByClassName(value);
       }else{
         console.log(document.getElementsByTagName(input))
       }
     } // end method select
   } //end SweetSelector

   var DOM = {
     hide: function(input){
      var element = SweetSelector.select(input)
        if (element.length == undefined) {
            element.style.visibility = "hidden"
        }else{
        for (var i = 0; i < element.length; i++) {
          element[i].style.visibility = "hidden";
        }
      }

      },
      show: function(input){
        var element = SweetSelector.select(input)
        if(element.length == undefined){
          element.style.visibility = "visible"
        }else{
         for (var i = 0; i < element.length; i++) {
           element[i].style.visibility = 'visible';
         }
       }
       },
       removeClass: function(input,input2){
          var element = SweetSelector.select(input,input2)
          for (var i = 0; i < element.length; i++) {
            element[i].remove(input,input2)
          }
        },
        addClass: function(input,input2){
          var element = SweetSelector.select(input,input2)
           for (var i = 0; i < element.length; i++) {
             element[i].classList.add(input,input2)
           }
         }
   } //end SweetSelector

var EventDispatcher={
  on:function(input1,input2,callback){
    var element = [];
    element = SweetSelector.select(input1)
    for (var i = 0; i < element.length; i++) {
      element[i].addEventListener(input2,callback)
    }
  }
}

var AjaxWrapper={
  request:function(data){
  var request = new XMLHttpRequest(data);
  request.open('GET',data.url,true)
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
    data.success(this.responseText)
    } else {
    data.fail(this.responseText)
    }
  }
  request.send()
  }
}

function miniquery(input){
  function hide(){
    DOM.hide(input)
  }
  function show(){
    DOM.show(input)
  }
  return ({
    this:SweetSelector.select(input),
    hide:hide,
    show:show
  })
}

function $(input){
  function hide(){
    DOM.hide(input)
  }
  function show(){
    DOM.show(input)
  }
  return ({
    this:SweetSelector.select(input),
    hide:hide,
    show:show
  })
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
