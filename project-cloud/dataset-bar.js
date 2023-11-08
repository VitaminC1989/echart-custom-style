const option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['a', 41.1, 30.4, 65.1, 53.3],
      ['b', 86.5, 92.1, 85.7, 83.1],
      ['c', 24.1, 67.2, 79.5, 86.4]
    ]
  },
  xAxis: [
    { type: 'category', gridIndex: 0 },
    { type: 'category', gridIndex: 1 },
    { type: 'category', gridIndex: 2 },
    { type: 'category', gridIndex: 3 }
  ],
  yAxis: [
    { gridIndex: 0 },
    { gridIndex: 1 },
    { gridIndex: 2 },
    { gridIndex: 3 }
  ],
  grid: [
    { left: '0', right: '75%', top: '0%', bottom: '55%' },
    { left: '25%', right: '50%', top: '0%', bottom: '55%' },
    { left: '50%', right: '25%', top: '0%', bottom: '55%' },
    { left: '75%', right: '0%', top: '0%', bottom: '55%' }
  ],
  series: [
    // These series are in the first grid.
    // { type: 'bar', seriesLayoutBy: 'row' },
    // { type: 'bar', seriesLayoutBy: 'row' },
    // { type: 'bar', seriesLayoutBy: 'row' },

    { type: 'bar' },
    { type: 'bar' },
    { type: 'bar' },

    // These series are in the second grid.
    // { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    // { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    // { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    // { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }

    // { type: 'bar' },
    // { type: 'bar' },
    // { type: 'bar' },
    // { type: 'bar' },

    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },

    { type: 'bar', xAxisIndex: 2, yAxisIndex: 2 },
    { type: 'bar', xAxisIndex: 2, yAxisIndex: 2 },
    { type: 'bar', xAxisIndex: 2, yAxisIndex: 2 },

    { type: 'bar', xAxisIndex: 3, yAxisIndex: 3 },
    { type: 'bar', xAxisIndex: 3, yAxisIndex: 3 },
    { type: 'bar', xAxisIndex: 3, yAxisIndex: 3 },
    { type: 'bar', xAxisIndex: 3, yAxisIndex: 3 }
  ]
};
