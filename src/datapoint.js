(function(exports){

    // your code goes here

   exports.helloworld = function(){
        return 'hello world'
    };

})(typeof exports === 'undefined'? this['mymodule']={}: exports);
