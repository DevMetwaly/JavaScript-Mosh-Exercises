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
    this.render = function(){
        return `<select>
${this.items.map(item => `  <option>${item}</option>`).join('\n')}
</select>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;



function HtmlImageElement(src = ''){
    this.src = src;
    this.render = function(){
        return `<img src="${src}">`;
    }
}

HtmlImageElement.prototype = new HtmlElement;
HtmlImageElement.prototype.constructor = HtmlImageElement;



let arr=[
    new HtmlSelectElement([222,3,410,10,2,0,10]),
    new HtmlImageElement('img.png')
];
for(ele of arr)
    console.log(ele.render());
