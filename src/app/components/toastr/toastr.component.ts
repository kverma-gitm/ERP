import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  standalone: true,
  imports: [],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.css'
})
export class ToastrComponent {
  constructor(private toastr: ToastrService) {}

  showMessage(message:string) {
    this.toastr.error(message);
  }
}
