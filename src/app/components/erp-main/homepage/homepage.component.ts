import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  constructor(
    public router: Router,
    ) { }

    ngOnInit(): void {
      let token = localStorage.getItem("token");
      if( !token ) {
        this.router.navigate(['/login']);
      }
    }

    logout() {
      localStorage.setItem("token","");
      this.router.navigate(['/login']);
    }
  }
  