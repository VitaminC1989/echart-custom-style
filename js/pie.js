import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['60%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: '#fff',
        borderWidth: 2,
        borderJoin: 'bevel'
      },
      label: { 
        show: false,
        position: 'center',
        color: 'pink'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '80',
          fontWeight: 'bold'
        },
        scale: true, // 是否开启高亮后扇区的放大效果。
        scaleSize: 80 // 高亮后扇区的放大尺寸, 在开启 emphasis.scale 后有效。
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '工程类别' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

option && myChart.setOption(option);
