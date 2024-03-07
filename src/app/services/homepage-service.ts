export class HomePageService {
    
    constructor() {}
    
    getRadarChartData() {
        return {
            series: [
                {
                    name: "Series 1",
                    data: [80, 50, 30, 40, 100, 20]
                }
            ],
            chart: {
                type: "radar",
                height: 415
            },
            // title: {
            //     text: "Basic Radar Chart"
            // },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June"]
            }
        };
    }

    getAreaChartData() {
        return  {
            series: [
              {
                name: "series1",
                data: [31, 40, 28, 51, 42, 109, 100]
              },
              {
                name: "series2",
                data: [11, 32, 45, 32, 34, 52, 41]
              }
            ],
            chart: {
              height: 350,
              type: "area"
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: "smooth"
            },
            xaxis: {
              type: "datetime",
              categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z"
              ]
            },
            tooltip: {
              x: {
                format: "dd/MM/yy HH:mm"
              }
            }
          };
    }

    getAttendanceData() {
        return [
            {
                attentance:80,
                color:'green',
                title:'Total Present'
            },
            {
                attentance:70,
                color:'red',
                title:'Total Absent'
            },
            {
                attentance:20,
                color:'orange',
                title:'Total Leaves'
            }
        ]
    }
    
}