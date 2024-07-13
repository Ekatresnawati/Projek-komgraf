// Click and drag the mouse to view the scene from different angles.
let gantiWarna = false;
function setup() {
  createCanvas(800, 800, WEBGL);
}

function setup() {
  createCanvas(500, 500, WEBGL);

  describe('A white sphere on a gray background.');
}

function draw() {
  background(100);

  // Enable orbiting with the mouse.
  orbitControl();
//mengatur warna / pencahayaan
if (gantiWarna === true) {
  let colors = color('purple');
  ambientLight(colors);
}
  // Draw the sphere.
  // Set its radius to 120.
  // Set its detailX to 17.
  // Set its detailY to 4.
  sphere(120, 17, 4);
}
// membuat fungsi agar sphere bisa berubah warna
function doubleClicked() {
  gantiWarna = true; }