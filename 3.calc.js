function dispalyNum(num){
   result.value+=num 
}
function allclear(){
    result.value=""
}

function evaluateExp(){
    // exp=result.value
    // out=eval(exp)
    // out=result.value
    result.value=eval(result.value)
}
function removeElemnt(){
    curexp=result.value
    result.value=curexp.slice(0,-1)
}