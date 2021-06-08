option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        textStyle: {
          fontSize: 15,
          fontWeight: 400
        },
        left: '15%',
        right: '10%',
        data: [
        'CameraService (with Context)',
        'CameraService (without Context)',
        'SysoptService (with Context)',
        'SysoptService (without Context)']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        name: '测试运行时长（秒）',
        nameLocation: 'center',
        nameGap: 30,
        nameTextStyle: {
            fontSize: 15,
            fontWeight: 400,
            color: '#333',
        },
        boundaryGap: false,
        data: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 
            330, 360, 390, 420, 450, 480, 510, 540, 570, 600,
            630, 660, 690, 720, 750, 780, 810, 840, 870, 900
        ]
    },
    yAxis: {
        type: 'value',
        name: '基本块覆盖率',
        nameTextStyle: {
            fontSize: 15,
            fontWeight: 400,
            color: '#333',
        },
    },
    series: [
        {
            name: 'CameraService (with Context)',
            type: 'line',
            symbol: 'rect',
            symbolSize: 12,
            data: [0, 45, 65, 91, 105, 144, 198, 254, 302, 347, 
            387, 444, 474, 488, 510, 533, 555, 566, 580, 592, 
            611, 621, 637, 638, 640, 646, 656, 661, 666, 672, 678]
        },
        {
            name: 'CameraService (without Context)',
            type: 'line',
            symbol: 'emptyRect',
            symbolSize: 12,
            data: [0, 36, 70, 99, 120, 131, 149, 168, 203, 251,
            289, 339, 351, 379, 418, 432, 445, 464, 472, 481,
            505, 518, 530, 535, 539, 549, 560, 561, 563, 563, 563
            ]
        },
        {
            name: 'SysoptService (with Context)',
            type: 'line',
            symbol: 'triangle',
            symbolSize: 14,
            data: [0, 23, 32, 44, 52, 74, 92, 121, 144, 162, 177, 
            189, 208, 223, 243, 256, 270, 277, 282, 289, 293, 294, 
            299, 302, 304, 305, 305, 305, 305, 306, 306]
        },
        {
            name: 'SysoptService (without Context)',
            type: 'line',
            symbol: 'emptyTriangle',
            symbolSize: 14,
            data: [0, 15, 22, 29, 35, 51, 71, 90, 102, 117, 123, 
            130, 146, 153, 161, 175, 183, 188, 188, 188, 188, 
            188, 188, 189, 189, 190, 191, 191, 191, 191, 191]
        }
    ]
};