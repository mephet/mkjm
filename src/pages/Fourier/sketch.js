export class FourierSeries {

    constructor(windowWidth, windowHeight) {
        this.time = 0;
        this.canvasWidth = windowWidth;
        this.canvasHeight = windowHeight;
        this.wave = [];
    }

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(600, 400).parent(canvasParentRef);
    }

    draw = p5 => {
        p5.background(0);
        p5.translate(200, 200);
        this.time += 0.04;

        let x = 0;
        let y = 0;

        for (let i = 0; i < 4; i++) {
            let prevX = x;
            let prevY = y;
            let n = i * 2 + 1;
            let radius = 50 * (4 / (n * p5.PI))
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

    drawWave = (p5, x, y) => {
        p5.translate(100, 0);
        p5.line(x - 100, y, 0, this.wave[0]);
        p5.beginShape();
        p5.noFill();
        for (let i = 0; i < this.wave.length; i++) {
            p5.vertex(i, this.wave[i])
        }
        if (this.wave.length > 200) {
            this.wave.pop();
        }
        p5.endShape();
    }

    drawEllipse = (p5, radius, time) => {





    }

}

export default FourierSeries;