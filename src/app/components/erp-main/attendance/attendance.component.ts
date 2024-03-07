import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {
  @Input() title:any = '';
  @Input() attendance:any = '';
  @Input() color:any = '';
}
