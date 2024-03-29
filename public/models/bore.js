export default {
  title: 'Simple Bore',
  features: [
    {
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
      id: 'e1',
      selectById: 'box',
      amount: 1
      // Generates e1._planes[]
    },
    {
      id: 's2',
      type: 'sketch',
      plane: 'e1._planes[0]',
      sketch: [
        { x: 1, y: 1, type: 'point' }
      ]
    },
    {
      suppress: false,
      type: 'bore',
      selectById: 's2',
      diameter: 5,
      amount: 10 // 'throughall'
    }
  ]
}
