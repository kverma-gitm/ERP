import { Component, Input, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  labels: string[]
};

@Component({
  selector: 'app-apexcharts',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './apexcharts.component.html',
  styleUrl: './apexcharts.component.css',
  providers:[ChartComponent]
})


export class ApexchartsComponent implements OnInit {
  public chartOptions: Partial<ChartOptions> = {};
  
  @Input() series:ApexAxisChartSeries | null = null;
  @Input() chart:ApexChart | null = null;
  @Input() title:ApexXAxis | null = null;
  @Input() xaxis:ApexTitleSubtitle | null = null;
  @Input() labels: string[] = [];
  // @Input() annotations: ApexAnnotations | null = null;
  // @Input() colors: string[] = [];
  // @Input() dataLabels: ApexDataLabels | null = null;
  // @Input() stroke: ApexStroke | null = null;
  // @Input() legend: ApexLegend | null = null;
  // @Input() fill: ApexFill | null = null;
  // @Input() tooltip: ApexTooltip | null = null;
  // @Input() plotOptions: ApexPlotOptions | null = null;
  // @Input() responsive: ApexResponsive[] | null = null;
  // @Input() yaxis: ApexYAxis | ApexYAxis[] | null = null;
  // @Input() grid: ApexGrid | null = null;
  // @Input() states: ApexStates | null = null;
  // @Input() subtitle: ApexTitleSubtitle | null = null;
  // @Input() theme: ApexTheme | null = null;
  constructor(
    public charts:ChartComponent
    ) {}
    
    ngOnInit(): void {
      this.chartOptions = {
        ...( this.series && {series: this.series}),
        ...( this.chart && {chart: this.chart}),
        ...( this.title && {title: this.title}),
        ...( this.xaxis && {xaxis: this.xaxis}),
        ...( this.labels && {labels: this.labels}),
      };
    }
    
  }
  