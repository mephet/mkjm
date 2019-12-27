export class FourierSeries {
    
    constructor(windowWidth, windowHeight) {

        this.canvasWidth = windowWidth;
        this.canvasHeight = windowHeight;
    }
    
    setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400).parent(canvasParentRef);
    }

    draw = p5 => {
        p5.background(51);

    }

    drawWords = p5 => {
        p5.fill(255);
        p5.textSize(28);
        p5.text('k=' + (this.n/this.d).toFixed(2), 10, 50)
    }

}

export default FourierSeries;