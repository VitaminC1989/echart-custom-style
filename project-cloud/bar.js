import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '应收款'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    bottom: 0
  },
  toolbox: {
    show: false,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      // 坐标轴轴线
      axisLine: {
        show: true
      },
      // 坐标轴刻度
      axisTick: {
        show: false
      },
      // 坐标轴刻度标签
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgba(255, 255, 255, 0.6)'
        }
      },

      data: ['数智交院', '浙江交工', '浙江交工', '浙江交工']
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: { show: false },
      // 坐标轴轴线
      axisLine: {
        show: true
      },
      // 坐标轴刻度
      axisTick: {
        show: false
      },
      // 坐标轴刻度标签
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %',
        textStyle: {
          color: 'rgba(255, 255, 255, 0.6)'
        }
      }
    }
  ],
  series: [
    {
      name: '应收款逾期率',
      type: 'bar',
      data: [10, 20, 30, 40],
      // ---------标记线---------
      markLine: {
        symbol: 'none',
        data: [
          {
            name: '预警线',
            yAxis: '100'
          }
        ],
        label: {
          show: false
        },
        lineStyle: {
          type: 'solid',
          color: 'red'
        }
      },
      // ----------样式----------
      itemStyle: {
        barBorderRadius: [2, 2, 0, 0], //柱体圆角
        color: new echarts.graphic.LinearGradient(
          //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
          //通过修改前4个参数，可以实现不同的渐变方向
          /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                          每项为一个对象，包含offset和color两个参数
                        */
          0,
          0,
          0,
          1,
          [
            {
              //代表渐变色从正上方开始
              offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
              color: 'rgba(178, 138, 79,1)'
            }, //柱图渐变色
            {
              offset: 1, //指100%处的颜色
              color: 'rgba(178, 138, 79,0)'
            }
          ]
        )
      }
    },
    {
      name: '应收款占比',
      type: 'bar',
      data: [30, 40, 50, 60],
      markPoint: {
        data: [
          { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
          { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      },
      // ----------样式----------
      itemStyle: {
        barBorderRadius: [2, 2, 0, 0], //柱体圆角
        color: new echarts.graphic.LinearGradient(
          //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
          //通过修改前4个参数，可以实现不同的渐变方向
          /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                          每项为一个对象，包含offset和color两个参数
                        */
          0,
          0,
          0,
          1,
          [
            {
              //代表渐变色从正上方开始
              offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
              color: 'rgba(44, 94, 180,1)'
            }, //柱图渐变色
            {
              offset: 1, //指100%处的颜色
              color: 'rgb(178, 138, 79,0)'
            }
          ]
        )
      }
    }
  ]
};




option && myChart.setOption(option);
