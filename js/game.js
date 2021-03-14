class Loop {
    constructor () {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 480;
        this.canvas.height = 480;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
};

export {Loop};
