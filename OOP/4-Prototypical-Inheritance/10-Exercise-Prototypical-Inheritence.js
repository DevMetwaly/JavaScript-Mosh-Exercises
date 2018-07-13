function HtmlElement(){
    this.click = function(){
        console.log("Clicked");
    };
}

HtmlElement.prototype.focus = function(){
    console.log("Focued");
};


function HtmlSelectElement(items = []){
    this.items = items;
    this.addElement = function(item){
        this.items.push(item);
    };
    this.removeElement = function(item){
        let index = this.items.findIndex(value => value === item);
        if(index != -1)
            this.items.splice(index,1);
    };
}

HtmlSelectElement.prototype = new HtmlElement;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;