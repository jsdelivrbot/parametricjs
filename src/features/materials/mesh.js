const {THREE} = window
// https://threejs.org/docs/scenes/material-browser.html#MeshBasicMaterial
const color =
    0x1976d2
    // new THREE.Color('cyan')

const depthBlue = new THREE.MeshStandardMaterial({ color })
const phong = new THREE.MeshPhongMaterial({ color })
const wireframe = new THREE.MeshBasicMaterial({ color, wireframe: true })
const deluxe = new THREE.MeshStandardMaterial({ color })

// Exports
// export const wireframe
export const normal = phong
export const blue = new THREE.MeshPhongMaterial({ color: color })
export const transparent = new THREE.MeshPhongMaterial({
  color: color,
  // alphaMap: 0.5
  transparent: true,
  opacity: 0.5
})
export const red = new THREE.MeshPhongMaterial({ color: new THREE.Color('red') })
