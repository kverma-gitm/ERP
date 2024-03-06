import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ApexchartsComponent, ChartOptions } from '../apexcharts/apexcharts.component';
import { HomePageService } from '../../../services/homepage-service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SidebarComponent,ApexchartsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  providers: [HomePageService]
})
export class HomepageComponent implements OnInit {
  public radarChart: Partial<ChartOptions> = {};
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
    }

    logout() {
      localStorage.setItem("token","");
      this.router.navigate(['/login']);
    }
  }
  