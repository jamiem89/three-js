import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// // Position
// mesh.position.x = .6
// mesh.position.y = -.6
// mesh.position.z = -.6
// // Scale
// mesh.scale.set(1.2, 0.4, .8);
// // Rotation - Pi = half a rotation;
// mesh.rotation.x = .5;
// mesh.rotation.y = Math.PI;
// mesh.rotation.z = 1;
// scene.add(mesh)

// Grouping objects
const group = new THREE.Group();
const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 'red'}));
const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 'green'}));
cube2.position.x = 1.2
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 'blue'}));
cube3.position.x = -1.2
group.add(cube1);
group.add(cube2);
group.add(cube3);
scene.add(group);

// Create axes helper - property is length of lines
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera);
// We can use lookAt to look at the centre of an object
// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)