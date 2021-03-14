import {loop} from '../index.js';

class Player {
    constructor (backgroundColor) {        
        this.ctx = loop.context;

        this.mainTriangle = {
            center: [],
            color: '#fff',
            circleRadius: 27
        };
        this.invisibleRectTopCutOff = {
            width: this.mainTriangle.circleRadius,
            height: this.mainTriangle.circleRadius / 2.5,
            color: backgroundColor
        };
        this.invisibleTriangleBottomCutOff = {
            center: [this.mainTriangle.center[0], this.mainTriangle.center[1] + this.mainTriangle.circleRadius],
            color: backgroundColor,
            circleRadius: this.mainTriangle.circleRadius
        };
        
        this.ctx.save();
        /* Main Triangle draw */
        this.ctx.strokeStyle = this.mainTriangle.color;
        this.ctx.fillStyle = this.mainTriangle.color;
        this.ctx.beginPath();
        this.mainTriangle.center[0] = this.ctx.canvas.width / 2;
        this.mainTriangle.center[1] = this.ctx.canvas.height - this.mainTriangle.circleRadius - (this.mainTriangle.circleRadius / 2);
        this.ctx.moveTo(this.mainTriangle.center[0], this.mainTriangle.center[1] - this.mainTriangle.circleRadius);
        this.ctx.lineTo(
            this.mainTriangle.center[0] + (Math.cos(Math.PI/4) * this.mainTriangle.circleRadius),
            this.mainTriangle.center[1] + (Math.sin(Math.PI/4) * this.mainTriangle.circleRadius)
        );
        this.ctx.lineTo(
            this.mainTriangle.center[0] + (Math.cos(Math.PI - Math.PI/4) * this.mainTriangle.circleRadius),
            this.mainTriangle.center[1] + (Math.sin(Math.PI - Math.PI/4) * this.mainTriangle.circleRadius)
        );
        this.ctx.closePath();
        this.ctx.fill();
        //this.ctx.stroke();
        
        /* Invisible Top Rectangle cut-off draw */
        this.ctx.fillStyle = backgroundColor;
        this.ctx.strokeStyle = "red";
        this.ctx.beginPath();
        this.invisibleRectTopCutOff.x = this.mainTriangle.center[0] - (this.invisibleRectTopCutOff.width / 2);
        this.invisibleRectTopCutOff.y = this.mainTriangle.center[1] - this.mainTriangle.circleRadius;
        this.ctx.fillRect(this.invisibleRectTopCutOff.x, this.invisibleRectTopCutOff.y, this.invisibleRectTopCutOff.width, this.invisibleRectTopCutOff.height);
        //this.ctx.strokeRect(this.invisibleRectTopCutOff.x, this.invisibleRectTopCutOff.y, this.invisibleRectTopCutOff.width, this.invisibleRectTopCutOff.height);
        
        /* Invisible Triangle Bottom cut off draw */
        this.ctx.fillStyle = backgroundColor;
        this.ctx.strokeStyle = "blue";
        this.ctx.beginPath();
        this.invisibleTriangleBottomCutOff.center[0] = this.mainTriangle.center[0];
        this.invisibleTriangleBottomCutOff.center[1] = this.mainTriangle.center[1] + this.mainTriangle.circleRadius;
        this.ctx.moveTo(this.invisibleTriangleBottomCutOff.center[0], this.invisibleTriangleBottomCutOff.center[1] - this.invisibleTriangleBottomCutOff.circleRadius);
        this.ctx.lineTo(
            this.invisibleTriangleBottomCutOff.center[0] + (Math.cos(Math.PI/4) * this.invisibleTriangleBottomCutOff.circleRadius),
            this.invisibleTriangleBottomCutOff.center[1] + (Math.sin(Math.PI/4) * this.invisibleTriangleBottomCutOff.circleRadius)
        );
        this.ctx.lineTo(
            this.invisibleTriangleBottomCutOff.center[0] + (Math.cos(Math.PI - Math.PI/4) * this.invisibleTriangleBottomCutOff.circleRadius),
            this.invisibleTriangleBottomCutOff.center[1] + (Math.sin(Math.PI - Math.PI/4) * this.invisibleTriangleBottomCutOff.circleRadius)
        );
        this.ctx.closePath();
        this.ctx.fill();
        //this.ctx.stroke();
    }
}



export {Player}
