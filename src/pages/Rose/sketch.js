export class RoseFunction {
    constructor(n, d) {
        this.n = n;
        this.d = d;
        this.k = n/d;
    }

    setup = (p5, parentCanvasRef) => {
        p5.createCanvas(window.innerWidth, 500 - 67);
    }

    draw = p5 => {
        p5.background(51);
        p5.translate(p5.width / 2, p5.height / 2)
    
        p5.beginShape();
        for (let a = 0; a < p5.TWO_PI * 10; a += 0.02) {
            const r = 200 * p5.cos(this.k * a);
            let x = r * p5.cos(a);
            let y = r * p5.sin(a);
    
            p5.noFill();
            p5.stroke(255);
            p5.strokeWeight(1);
            p5.vertex(x, y)
        }
        p5.endShape(p5.CLOSE);
    }

}

export default RoseFunction;