import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ApexchartsComponent } from '../apexcharts/apexcharts.component';
import { HomePageService } from '../../../services/homepage-service';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from '../attendance/attendance.component';
import { TableComponent } from '../table/table.component';
import { BirthdayComponent } from '../birthday/birthday.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    SidebarComponent,
    ApexchartsComponent,
    CommonModule,
    AttendanceComponent,
    TableComponent,
    BirthdayComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  providers: [HomePageService]
})
export class HomepageComponent implements OnInit {
  public radarChart: any;
  public areaChart: any;
  public attentanceData: any;
  public pendingLeavesData: any;
  public absentStudentsData:any
  public feeDueTableData:any;
  public dashboardData:any;
  public userData:any;
  public studentsData:any;
  
  public dueFees:string = String(new Date().getDate()).padStart(2, '0');
  constructor(
    public router: Router,
    public homePageService: HomePageService,
    ) { }
    
    ngOnInit(): void {
      this.loadScript();
      let token = localStorage.getItem("token");
      if( !token ) {
        this.router.navigate(['/login']);
      }
      
      this.radarChart = this.homePageService.getRadarChartData();
      this.areaChart = this.homePageService.getAreaChartData();
      this.attentanceData = this.homePageService.getAttendanceData();
      this.pendingLeavesData = this.homePageService.getPendingLeavesData();
      this.absentStudentsData = this.homePageService.getAbsentTableData();
      this.feeDueTableData = this.homePageService.getFeeDueTableData();
      this.dashboardData = this.homePageService.getDashboardData();
      this.userData = this.homePageService.getUserData();
      this.studentsData = this.homePageService.getBirthdayData();
    }
    
    public loadScript() {
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src = '../../../../assets/js/main.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    }
    
    logout() {
      localStorage.setItem("token","");
      this.router.navigate(['/login']);
    }
  }
  