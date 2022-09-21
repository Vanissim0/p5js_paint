const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

// function preload() {
//     img = loadImage("sample-image.png");
// }

function setup() {
    img = createCanvas(window.innerWidth, window.innerHeight);
    background(255);
    // img = createGraphics(4000, 4000);
    
}

function draw() {
    noFill();

    if (mouseIsPressed) {
        const point = {
            x: mouseX,
            y: mouseY,
            colors: colorInput.value,
            weight: weight.value
        };
        currentPath.push(point);
    }

    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            stroke(point.colors);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
        endShape();
    });
}

function mousePressed() {
    currentPath = [];
    paths.push(currentPath);
}


// button Delete
clear.addEventListener('click', () => {
    paths.splice(0);
    background(255);
});

// function keyTyped() {
    
 
//     // Pressing the "q" key to
//     // save the image
//     if (key === 'q') {
//       img.save('saved-image', 'png');
//     }
// }

function keyTyped(){
    if (key === 'q') {
        img.save("MyDrawing.png"); 
    }
}
