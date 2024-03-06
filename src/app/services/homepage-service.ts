export class HomePageService {
    
    constructor() {}
    
    getRadarChartData() {
        return {
            series: [
                {
                    name: "Radar Series 1",
                    data: [45, 52, 38, 24, 33, 10]
                },
                {
                    name: "Radar Series 2",
                    data: [26, 21, 20, 6, 8, 15]
                }
            ],
            labels: ['April', 'May', 'June', 'July', 'August', 'September']
        }
    }
    
}