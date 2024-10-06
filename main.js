import * as TR from 'three';
console.log('gl hf');

const MAP_SIZE = 48;
const g = {
  MAP_W: MAP_SIZE,
  MAP_H: MAP_SIZE,
};

const scene = new TR.Scene();
const renderer = new TR.WebGLRenderer({ antialias: false });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const groundGeometry = new TR.PlaneGeometry(g.MAP_W, g.MAP_H, g.MAP_W, g.MAP_H);
const groundMesh = new TR.Mesh(groundGeometry, new TR.MeshBasicMaterial({ color: 0xcccccc, side: TR.DoubleSide }));
scene.add(groundMesh);

const camera = new TR.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, MAP_SIZE * 2);
camera.position.set(0, 0, MAP_SIZE);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
