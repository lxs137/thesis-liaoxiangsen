option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '14%',
        left: '10%',
        right: '10%',
        itemGap: 18,
        data: ['ServiceManager',
               'IActivityManager',
               'IPackageManager',
               'IAppOpsService',
               'IBatteryStats',
               'IProcessInfoService',
               'other'
        ],
        textStyle: {
            'color': '#222',
            'fontSize': 16
        }
    },
    title: [{
        text: 'Binder IPC的目标服务名称',
        left: 'center',
        top: '6%',
        textStyle: {
            fontSize: 18,
            fontWeight: 1
        }
    }, {
        text: 'CameraService',
        left: '25%',
        top: '75%',
        textAlign: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 1,
        },
    }, {
        text: 'AudioService',
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
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            left: 0,
            right: '50%',
            label: {
                normal: {
                    fontSize: 20,
                    formatter: '{d}%',
                    position: 'inside'
                }
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
                {value: 40, name: 'ServiceManager'},
                {value: 17, name: 'IActivityManager'},
                {value: 10, name: 'IPowerManager'},
                {value: 9, name: 'IBatteryStats'},
                {value: 8, name: 'IAppOpsService'},
                {value: 16, name: 'other'}
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            left: '50%',
            label: {
                normal: {
                    fontSize: 20,
                    formatter: '{d}%',
                    position: 'inside'
                }
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
                {value: 32, name: 'ServiceManager'},
                {value: 14, name: 'IActivityManager'},
                {value: 13, name: 'IAppOpsService'},
                {value: 10, name: 'IProcessInfoService'},
                {value: 6, name: 'IPackageManager'},
                {value: 25, name: 'other'}
            ]
        }
    ]
};