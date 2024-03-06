import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OwlOptions,CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule,CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() sliderData:any;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
}
