const option = {
  angleAxis: {
    clockwise: false, // 刻度增长是否按顺时针，默认顺时针(true)。
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    min: 0,
    max: 16, //一圈的刻度值
    startAngle: 0, //初始角度
  },
  radiusAxis: {
    type: "category",
    data: ["1", "2", "3", "4"], // 极坐标径向轴中的类目，这边有几个数，
    // 就代表径向轴分了几份，和series中的data对应，这样就可以撑开圆环
    z: 10,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
  },
  polar: {},
  series: [
    {
      type: "bar",
      data: [0, 0, 0, 4],
      coordinateSystem: "polar",
      name: "A",
      roundCap: true,
      stack: "a",
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        // emphasis: {
        //   shadowBlur: 10,
        //   shadowColor: 'rgba(0, 0, 0, 0.5)'
        // }
      },
    },
    {
      type: "bar",
      data: [0, 0, 0, 8], // 前面的0，累计还是0，这样径向轴上的对应的分区总数就是0，不会显示圆环
      coordinateSystem: "polar",
      name: "B",
      stack: "a",
      roundCap: true,
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        // emphasis: {
        //   shadowBlur: 10,
        //   shadowColor: 'rgba(0, 0, 0, 0.5)'
        // }
      },
    },
    {
      type: "bar",
      data: [0, 0, 0, 4],
      coordinateSystem: "polar",
      name: "C",
      stack: "a",
      roundCap: true,
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        // emphasis: {
        //   shadowBlur: 10,
        //   shadowColor: 'rgba(0, 0, 0, 0.5)'
        // }
      },
    },
  ],
  legend: {
    show: true,
    data: ["A", "B", "C"],
  },
};
