export default {
  title: 'Simple Cut',
  features: [{
    id: 'box',
    type: 'sketch',
    plane: 'top',
    path: [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 4 },
      { x: 0, y: 4 },
      { x: 0, y: 0 }
    ]
  },
  {
    type: 'extrude',
    id: 'extrude1',
    suppress: false,
    selectById: 'box',
    amount: 4
  },
  {
    id: 'cutsketch',
    type: 'sketch',
    path: [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 1, y: 2 },
      { x: 1, y: 1 }
    ]
  },
  {
    suppress: false,
    type: 'cut',
    selectById: 'cutsketch',
    amount: 10 // 'throughall'
  }
  ]
}
