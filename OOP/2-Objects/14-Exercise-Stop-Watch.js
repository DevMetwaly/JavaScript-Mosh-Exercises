function Stopwatch(){
    let working = false, duration = 0, startTime = 0;

    this.start = function(){
        if(working) throw new Error("Stopwatch already started");
        working = true;
        startTime = Date.now();
    };

    this.stop = function(){
        if(!working) throw new Error("Stopwatch is not wroking");
        working = false;
        duration += (Date.now() - startTime)/1000;
    };

    this.reset = function(){
        duration = 0;
        working = false;
    }
    
    Object.defineProperty(this,'duration' ,{
        get: function(){
            return duration;
        }
    }); 
}