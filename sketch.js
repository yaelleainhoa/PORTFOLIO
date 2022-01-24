function clamp(min, max, value){
    return value < min ? min : value > max ? max : value
}

let noiseScale = 0.008;

function draw(){
    background('#FFDCDB');
    let n=0
    let r = 0
    let g = 0
    let b = 0
    for (let x=0; x < width; x+=3) {
        for (let y = 0; y < height; y+=3){
            n=noise((x)*noiseScale, (y)*noiseScale)
            r = clamp(52,242, 242*n+(n-1)*52)
            g = clamp(34, 193, 193*n+(n-1)*34)
            b = clamp(191, 212, 191*n+(n-1)*212)
            // stroke(0)
            stroke(r, g, b)
            strokeWeight(3)
            point(x,y)
        }
    }
}

function setup() {
    let canvas = createCanvas(700, 700);
    canvas.parent('sketch-container');
    background(50)
  }
