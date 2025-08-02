function callback(){
    console.log("add function is successfull adding");
}

var add = function(a, b, callback){
    var result = a*b;
    console.log("result", result);
    callback();
}

add(5,9, callback);

