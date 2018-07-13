function extend(child,parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function mixin(target, ...sources){
    Object.assign(target, ...sources);
}
 
const _count = new WeakMap();
const _list = new WeakMap();
class Stack{
    constructor(){
        _count.set(this,0);
        _list.set(this,[]);
    }
    get count(){
        return _count.get(this);
    }
    push(item){
        _list.get(this).push(item);
        _count.set(this,_count.get(this)+1);
    }
    pop(){
        if(!_count.get(this)) throw new Error('Stack is empty');
        _count.set(this,_count.get(this)-1); 
        return _list.get(this).pop();
    }
    peak(){
        if(!_count.get(this)) throw new Error('Stack is empty');
        let arr = _list.get(this);
        return arr[arr.length-1];
    }

}