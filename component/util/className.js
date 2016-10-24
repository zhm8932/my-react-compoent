const klassName = function(){
    if(arguments.length===0){
        return ''
    }
    let cls = Array.prototype.slice.call(arguments);
    // console.log("cls:",cls,"arguments:",arguments);
    // console.log('filter:',cls.filter(l => l))

    return cls.filter(str =>str).join(' ')  //filter 过滤掉undefined 去空格
}

module.exports = klassName;