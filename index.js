function extend(child,parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function mixin(target, ...sources){
    Object.assign(target, ...sources);
}
 
function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}


function Circle(radius){
    this.radius = radius;

}

extend(Circle,Shape);
Circle.prototype.duplicate = function(){
    //Shape.prototype.duplicate();
    console.log("duplicate Circle");
}


let c = new Circle(2);
