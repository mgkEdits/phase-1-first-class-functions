function spy(){
    return 0;
}



let receivesAFunction = function (spy) {
    spy();
}

let returnsANamedFunction = function(){
   return function con (y){return 0};
}

let returnsAnAnonymousFunction = function () {
    return function(){};
}