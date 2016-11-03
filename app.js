var counter = (function (){
  var count = 0;
  return function()
  {
    count = count + 1;
    console.log("Count Value is: " + count);
  }
})();

counter();
counter();
counter();
