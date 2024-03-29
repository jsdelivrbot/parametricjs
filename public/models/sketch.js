export default {
  title: 'Sketch',
  features: [
    {
      type: 'sketch',
      plane: 'front',
      children: [
        { type: 'point', x: 1, y: 1 },
        { type: 'circle', x: 2, y: 2, r: 1 },
        { name: 'outside-cirlce', type: 'circle', x: 7, y: 4, r: 0.5 },
        { name: 'outside-cirlce2', type: 'circle', x: 7, y: 1, r: 0.5 },
        // { type: 'point', x: 2, y: 2 },
        {
          type: 'path',
          path: [
            { x: 0, y: 0 },
            { x: 4, y: 0 },
            { x: 4, y: 4 },
            { x: 0, y: 4 },
            { x: 0, y: 0 }
          ]
        },
        {
          suppress: true,
          type: 'path',
          path: [
            ['moveTo', 5, 5],
            ['bezierCurveTo', 5, 5, 4, 0, 0, 0],
            ['bezierCurveTo', -6, 0, -6, 7, -6, 7],
            ['bezierCurveTo', -6, 11, -3, 15.4, 5, 19],
            ['bezierCurveTo', 12, 15.4, 16, 11, 16, 7],
            ['bezierCurveTo', 16, 7, 16, 0, 10, 0],
            ['bezierCurveTo', 7, 0, 5, 5, 5, 5]
          ]}
        // { type: 'path',
        //   path: [
        //     [0, 0],
        //     [4, 0],
        //     [4, 4],
        //     [0, 4],
        //     [0, 0]
        //   ]
        // }
      ]
    }
  ]
}
