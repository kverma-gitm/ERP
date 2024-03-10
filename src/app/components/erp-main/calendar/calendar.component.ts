import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  providers: [],
})
export class CalendarComponent implements OnInit {
  @Input() headerName:any;
  ngOnInit(): void {
    this.loadScript();
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
}
