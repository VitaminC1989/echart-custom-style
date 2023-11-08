/**
 * 参考资料：https://blog.csdn.net/weixin_49470245/article/details/121395694
 **/
 
import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);

var option;
option = {
  tooltip: {
    trigger: 'item',
    confine: true, //浮窗限制在图表内
    backgroundColor: '#1E2857', //通过设置rgba调节背景颜色与透明度
    borderColor: '#1E2857',
    color: '#fff',
    textStyle: {
      color: '#fff'
    },
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  grid: {
    top: '0%',
    left: '0%',
    right: '0%',
    bottom: '0%'
  },
  // 图例
  legend: {
    left: 'center',
    bottom: '5%',
    // orient: 'vertical',
    textStyle: {
      color: '#FFFDFE',
      rich: {
        a: {
          fontSize: 12,
          opacity: 0.75
        },
        underline: {
          borderColor: '#fff',
          width: '100%',
          borderWidth: 0.5,
          height: 0
        }
      }
    },
    itemWidth: 6,
    itemHeight: 6,
    itemStyle: {
      borderWidth: 0,
      borderColor: ''
    },
    formatter: (name) => {
      const data = option.series[0].data;
      const found = data.filter((item, i) => item.name === name)[0];
      const { value } = found;

      return `{a|${name}} ${value}\n{underline|}`;
    }
  },
  series: [
    //外圈
    {
      name: '',
      type: 'pie',
      radius: ['50%', '60%'],
      center: ['50%', '40%'], // 环形图位置
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      z: 11,
      data: [
        {
          value: 10000,
          name: '群众点单',
          itemStyle: {
            color: '#2DF3FF'
          }
        },
        {
          value: 2000, //空白间隔数值（根据数据数值动态改变）
          // name: '间隔', //空白间隔
          itemStyle: {
            color: '#0E121D'
          },
          tooltip: {
            show: false //划上不显示提示框
          }
        },
        {
          value: 10000,
          name: '中心派单',
          itemStyle: {
            color: '#33AAFF'
          }
        },
        {
          value: 2000, //空白间隔数值（根据数据数值动态改变）
          // name: '间隔', //空白间隔
          itemStyle: {
            color: '#0E121D'
          },
          tooltip: {
            show: false //划上不显示提示框
          }
        }
      ]
    },
    //内圈阴影
    {
      name: '',
      type: 'pie',
      radius: ['40%', '60%'],
      center: ['50%', '40%'], // 环形图位置
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      z: 10,
      emphasis: {
        scale: false //鼠标划上不展示高亮放大效果
      },
      data: [
        {
          value: 10000,
          name: '群众点单',
          itemStyle: {
            color: '#2DF3FF',
            opacity: 0.3
          }
        },
        {
          value: 2000, //空白间隔数值（根据数据数值动态改变）
          // name: '间隔', //空白间隔
          itemStyle: {
            color: '#0E121D'
          },
          tooltip: {
            show: false //划上不显示提示框
          }
        },
        {
          value: 10000,
          name: '中心派单',
          itemStyle: {
            color: '#33AAFF',
            opacity: 0.3
          }
        },
        {
          value: 2000, //空白间隔数值（根据数据数值动态改变）
          // name: '间隔', //空白间隔
          itemStyle: {
            color: '#0E121D'
          },
          tooltip: {
            show: false //划上不显示提示框
          }
        }
      ]
    }
  ]
};


option && myChart.setOption(option);
