import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserModel } from '../../models/login.model';
import { Router } from '@angular/router';
import { ToastrComponent } from '../toastr/toastr.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SliderComponent,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [ToastrComponent]
})
export class LoginComponent implements OnInit {
  public userForm:UserModel = {
    username:'',
    password:''
  };
  public showLoginErrorMsg:boolean = false;
  public sliderInfo = {};
  constructor(
    public router: Router,
    public toastrComponent:ToastrComponent
    ) {
      this.sliderInfo = [
        {
          url:"../../../assets/img/slider-bg-1.jpg",
          description:"Our product is fully compatible with all modern devices, ensuring a seamless user experience whether you're using a desktop, laptop, tablets, or smartphones. You can trust that our developmentteam has gone to great lenght to make sure our product works perfectly and looks great on any device, so you can use it wherever and ehenever you need it.",
          heading:"Compatible with All Devices"
        },
        {
          url:"../../../assets/img/slider-bg-1.jpg",
          description:"Our product is fully compatible with all modern devices, ensuring a seamless user experience whether you're using a desktop, laptop, tablets, or smartphones. You can trust that our developmentteam has gone to great lenght to make sure our product works perfectly and looks great on any device, so you can use it wherever and ehenever you need it.",
          heading:"Compatible with All Devices"
        },
        {
          url:"../../../assets/img/slider-bg-1.jpg",
          description:"Our product is fully compatible with all modern devices, ensuring a seamless user experience whether you're using a desktop, laptop, tablets, or smartphones. You can trust that our developmentteam has gone to great lenght to make sure our product works perfectly and looks great on any device, so you can use it wherever and ehenever you need it.",
          heading:"Compatible with All Devices"
        },
      ];
     }

  ngOnInit(): void {
    let token = localStorage.getItem("token")
    if( token === 'admin' ) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    if( this.userForm.username === 'admin' && this.userForm.password === 'admin' ) {
      localStorage.setItem("token", "admin");
      this.router.navigate(['/home']);
    }
    else {
      this.toastrComponent.showMessage("Invalid Username and Password!!");
      this.showLoginErrorMsg = true
    }
  }

  resetForm() {
    this.showLoginErrorMsg = false
  }
}
