import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  series: [
    {
      type: 'gauge',
      //半径
      // radius: 360,
      //起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
      startAngle: 180,
      //结束角度。
      endAngle: 0,
      // 进度条
      progress: {
        show: true,
        width: 40,
        itemStyle: {
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
                color: '#06b0d6'
              }, //柱图渐变色
              {
                offset: 1, //指100%处的颜色
                color: '#14ccbb'
              }
            ]
          )
        }
      },
      // 仪表盘指针
      pointer: {
        icon: 'react',
        length: '20%',
        offsetCenter: [0, '-40%'],
        itemStyle: {
          color: '#31e4f4'
        }
      },
      // 仪表盘轴线
      axisLine: {
        lineStyle: {
          width: 60
        }
      },
      // 刻度样式
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        show: false,
        distance: 25,
        color: '#999',
        fontSize: 20
      },
      anchor: {
        show: false,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: false
      },
      detail: {title
        valueAnimation: true,
        formatter: '{value}%',
        fontSize: 60,
        offsetCenter: [0, -30],
        color: '#fff',
        // 阴影
        textShadowColor: 'rgba(247, 240, 240, 1)',
        textShadowBlur: 20,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0
      },
      data: [
        {
          value: 100
        }
      ]
    }
  ]
};


option && myChart.setOption(option);
