function pipe(argnum) {
    for(let i = 1; i < arguments.length; i++){
        argnum = arguments[i](argnum);
    }
    return argnum;
}

function addOne(x) {
    return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);