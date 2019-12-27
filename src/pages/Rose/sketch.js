export class RoseFunction {
    constructor(n, d, windowWidth, windowHeight) {
        this.n = n;
        this.d = d;
        this.k = n/d;
        this.windowHeight = windowHeight;
        this.windowWidth = windowWidth;
        this.canvasWidth = Math.min(this.windowHeight, this.windowWidth)
    }

    setup = (p5, canvasParentRef) => {
        // const canvasWidth = Math.min(this.windowHeight, this.windowWidth)
        p5.createCanvas(this.canvasWidth, this.canvasWidth).parent(canvasParentRef);
    }

    draw = p5 => {
        p5.background(51);

        this.drawWords(p5);
        p5.translate(this.canvasWidth / 2, this.canvasWidth / 2)
    
        p5.beginShape();
        for (let a = 0; a < p5.TWO_PI * 10; a += 0.02) {
            const r =  this.canvasWidth * 0.3 * p5.cos(this.k * a);
            let x = r * p5.cos(a);
            let y = r * p5.sin(a);
    
            p5.noFill();
            p5.stroke(255);
            p5.strokeWeight(1);
            p5.vertex(x, y)
        }
        p5.endShape(p5.CLOSE);
    }

    drawWords = p5 => {
        p5.fill(255);
        p5.textSize(28);
        p5.text('k=' + (this.n/this.d).toFixed(2), 10, 50)
    }

}

export default RoseFunction;