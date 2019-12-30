export class FourierSeries {

    constructor(windowWidth, windowHeight, num, radiusMultiplier) {
        this.translateMultiplier = 0.25;
        this.time = 0;
        this.num = num;
        this.radiusMultiplier = radiusMultiplier;
        this.wave = [];
        this.canvasWidth = Math.min(windowHeight, windowWidth);

        this.draw = this.draw.bind(this);
        this.setup = this.setup.bind(this);
    }

    setup(p5, canvasParentRef) {
        p5.createCanvas(this.canvasWidth, this.canvasWidth).parent(canvasParentRef);
    }

    draw(p5) {
        p5.background(0);
        p5.translate(this.canvasWidth * this.translateMultiplier, this.canvasWidth / 2);
        this.time += 0.04;

        let x = 0;
        let y = 0;

        for (let i = 0; i < this.num; i++) {
            let prevX = x;
            let prevY = y;
            let n = i * 2 + 1;
            let radius = this.radiusMultiplier * (4 / (n * p5.PI))
            x += radius * p5.cos(n * this.time);
            y += radius * p5.sin(n * this.time);

            p5.stroke(255, 100)
            p5.noFill()
            p5.ellipse(prevX, prevY, radius * 2)
            p5.stroke(255)
            p5.fill(255)
            p5.ellipse(x, y, 2)
            p5.stroke(255)
            p5.line(prevX, prevY, x, y)
        }

        this.wave.unshift(y);
        this.drawWave(p5, x, y)

    }

    drawWave(p5, x, y) {
        p5.translate(500 * this.translateMultiplier, 0);
        p5.line(x - this.translateMultiplier * 500, y, 0, this.wave[0]);
        p5.beginShape();
        p5.noFill();
        for (let i = 0; i < this.wave.length; i++) {
            p5.vertex(i, this.wave[i])
        }
        if (this.wave.length > 400) {
            this.wave.pop();
        }
        p5.endShape();
    }

}

export default FourierSeries;