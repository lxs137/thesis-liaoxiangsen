option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '8%',
        left: '10%',
        right: '10%',
        itemGap: 18,
        data: ['与上游AOSP匹配',
               '与上游AOSP服务签名不一致',
               'Vendor新添加'
        ],
        textStyle: {
            'color': '#222',
            'fontSize': 16
        }
    },
    title: [{
        text: 'MIUI 10.8',
        left: '25%',
        top: '75%',
        textAlign: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 1,
        },
    }, {
        text: 'Samsung Experience 9.0',
        left: '75%',
        top: '75%',
        textAlign: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 1
        },
    }],
    series: [
        {
            name: 'MIUI 10.8 (Android 8.0)',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            left: 0,
            right: '50%',
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside',
                    fontSize: 22,
                },
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 115, name: '与上游AOSP匹配'},
                {value: 32, name: '与上游AOSP服务签名不一致'},
                {value: 27, name: 'Vendor新添加'}
            ]
        },
        {
            name: 'Samsung Experience 9.0',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            left: '50%',
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside',
                    fontSize: 22,
                },
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 99, name: '与上游AOSP匹配'},
                {value: 48, name: '与上游AOSP服务签名不一致'},
                {value: 61, name: 'Vendor新添加'}
            ]
        }
    ]
};