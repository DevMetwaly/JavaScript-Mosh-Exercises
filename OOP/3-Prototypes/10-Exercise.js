function Stopwatch(){
    let working = false, duration = 0, startTime = 0;

    
    
    Object.defineProperty(this,'duration' ,{
        get: function(){
            return duration;
        },
        set: function(value){
            duration = value;
        }
    }); 

    Object.defineProperty(this,'working',{
        get: function(){
            return working;
        },
        set: function(value){
            working = value;
        }
    });
    Object.defineProperty(this,'startTime',{
        get: function(){
            return startTime;
        },
        set: function(value){
            startTime = value;
        }
    });
}

Stopwatch.prototype.start = function(){
    if(this.working) throw new Error("Stopwatch already started");
    this.working = true;
    this.startTime = Date.now();
}
Stopwatch.prototype.stop = function(){
    if(!this.working) throw new Error("Stopwatch is not wroking");
    this.working = false;
    this.duration += (Date.now() - this.startTime)/1000;
}
Stopwatch.prototype.reset = function(){
    this.duration = 0;
    this.working = false;
}

let watch = new Stopwatch;

