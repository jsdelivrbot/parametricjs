export default {
  version: '1.00',
  uid: '08a2c8e7-47c0-456d-b1b6-e4a506f79a47',
  description: 'YCAD Test file',
  parameters: {
    variables: {
      height: 6,
      width: 3,
      thickness: 1
    }
  },

  features: [
    {
      type: 'plane',
      suppress: true,
      // TODO mates: [],
      mate: {
        type: 'offset',
        amount: 10,
        reference: 'front'
      }
    },

    {
      type: 'render',
      format: 'stl',
      creation: '2016-12-01',
      path: '',
      inline: ''
    },

    {
      id: 123,
      type: 'path',
      description: 'box',
      suppress: true,
      path: [
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 10, y: 10, z: 0 },
        { x: 0, y: 10, z: 0 },
        { x: 0, y: 0, z: 0 } // close
      ]
    },

    {
      id: 'box',
      type: 'sketch',
      description: 'sketch',
      plane: 'front',
      path: [
        { x: 0, y: 0 },
        { x: 4, y: 0 },
        { x: 4, y: 4 },
        { x: 0, y: 4 },
        { x: 0, y: 0 } // close
      ]
    },

    {
      id: 'para1',
      type: 'sketch',
      description: 'parametric sketch',
      plane: 'front',
      parameters: ['height', 'width'],
      path: [
        { x: 0, y: 0 },
        { x: 'width', y: 0 },
        { x: 'width * 2', y: 'height' },
        { x: 0, y: 'height' }
      ]
    },

    {
      type: 'extrude',
      suppress: true,
      selectById: 'para1',
      amount: 10
      // direction:
    },

    {
      id: 'hprofiledyn',
      type: 'sketch',
      description: 'H - profile with parameters',
      // parameters: ["height", "width", "thickness"],
      // _parameters: ["height=6;width=3;thickness=1"],
      path: [
        { x: 0, y: 0 },
        { x: 0, y: 'thickness' },
        { x: 'width/2-0.5', y: 'thickness' },
        { x: 'width/2-0.5', y: 'height-thickness' },
        { x: 0, y: 'height-thickness' },
        { x: 0, y: 'height' },
        { x: 'width', y: 'height' },
        { x: 'width', y: 'height-thickness' },
        { x: 'width/2+0.5', y: 'height-thickness' },
        { x: 'width/2+0.5', y: 'thickness' },
        { x: 'width', y: 'thickness' },
        { x: 'width', y: 0 }
      ]
    },

    {
      type: 'extrude',
      suppress: false,
      onFace: 'planes/front',
      sketchId: 'hprofiledyn',
      amount: 'length'
      // direction:
    },

    {
      id: 'hprofile',
      type: 'sketch',
      description: 'H - profile',
      path: [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 1, y: 5 },
        { x: 0, y: 5 },
        { x: 0, y: 6 },
        { x: 3, y: 6 },
        { x: 3, y: 5 },
        { x: 2, y: 5 },
        { x: 2, y: 1 },
        { x: 3, y: 1 },
        { x: 3, y: 0 }
      ]
    },

    {
      type: 'extrude',
      suppress: true,
      selectById: 'hprofile',
      amount: 10
      // direction:
    },

    {
      type: 'extrude',
      suppress: true,
      selectById: 1,
      amount: 10
      // direction:
    }

  ]
}
