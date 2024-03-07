import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ApexchartsComponent } from '../apexcharts/apexcharts.component';
import { HomePageService } from '../../../services/homepage-service';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from '../attendance/attendance.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SidebarComponent,ApexchartsComponent,CommonModule,AttendanceComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  providers: [HomePageService]
})
export class HomepageComponent implements OnInit {
  public radarChart: any;
  public areaChart: any;
  public attentanceData: any;
  constructor(
    public router: Router,
    public homePageService: HomePageService,
    ) { }

    ngOnInit(): void {
      let token = localStorage.getItem("token");
      if( !token ) {
        this.router.navigate(['/login']);
      }

      this.radarChart = this.homePageService.getRadarChartData();
      this.areaChart = this.homePageService.getAreaChartData();
      this.attentanceData = this.homePageService.getAttendanceData();
    }

    logout() {
      localStorage.setItem("token","");
      this.router.navigate(['/login']);
    }
  }
  