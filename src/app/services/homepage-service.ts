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
  
  getPendingLeavesData() {
    return {
      headers: [
        {name:"Approve"},
        {name:"Reject"},
        {name:"Students"},
        {name:"Class"},
        {name:"Request Date"},
        {name:"From Date"},
        {name:"To Date"},
        {name:"Reason"}
      ],
      data:[
        [
          {name:"Approve"},
          {status:"Reject"},
          {name:"Akshay"},
          {class:"Nursary A",strong:true},
          {requestDate:"09/02/2024"},
          {fromDate:"2024/02/08"},
          {toDate:"2024/02/08"},
          {reason:"Leaves"}
        ],
        [
          {name:"Approve"},
          {status:"Reject"},
          {name:"Akshay"},
          {class:"Nursary A",strong:true},
          {requestDate:"09/02/2024"},
          {fromDate:"2024/02/08"},
          {toDate:"2024/02/08"},
          {reason:"Leaves"}
        ],
        [
          {name:"Approve"},
          {status:"Reject"},
          {name:"Akshay"},
          {class:"Nursary A",strong:true},
          {requestDate:"09/02/2024"},
          {fromDate:"2024/02/08"},
          {toDate:"2024/02/08"},
          {reason:"Leaves"}
        ]
      ]
    }
  }

  getAbsentTableData() {
    return {
      headers: [
        {name:"Class"},
        {name:"Section"},
        {name:"Total"},
        {name:"Class"},
        {name:"Section"},
        {name:"Total"},
      ],
      data:[
        [
          {name:"Nursery"},
          {section:"A"},
          {total:"3"},
          {name:"LKG",strong:true},
          {section:"A"},
          {total:"1"},
        ],
        [
          {name:"Nursery"},
          {section:"A"},
          {total:"3"},
          {name:"LKG",strong:true},
          {section:"A"},
          {total:"1"},
        ],
        [
          {name:"Nursery"},
          {section:"A"},
          {total:"3"},
          {name:"LKG",strong:true},
          {section:"A"},
          {total:"1"},
        ]
      ]
    }
  }

  getFeeDueTableData() {
    return {
      headers: [
        {name:"Total"},
        {name:"Discount"},
        {name:"Pending"},
        {name:"Concession"},
        {name:"Paid"},
      ],
      data:[
        [
          {total:60},
          {discount:20},
          {pending:30},
          {concession:50},
          {paid:40},
        ]
      ]
    }
  }

  getDashboardData() {
    return {
      totalStaff:247,
      totalStudents:850,
      totalSection:500,
      cancelled: 200
    }
  }

  getUserData() {
    return {
      firstName: 'Sandeep',
      lastName: 'Sharma',
      profilePic: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
    }
  }

  getBirthdayData() {
    return [
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      {
        firstName: 'Priyash',
        lastName: 'Gupta',
        class:'Nursary - 2',
        picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1480&t=st=1709914568~exp=1709915168~hmac=cf591c484e64f480fcc3cea43254d7ac62acb758cdbef5c642f8a1a44a561559'
      },
      
    ]
  }
  
}