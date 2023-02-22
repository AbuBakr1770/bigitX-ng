import { Component, OnInit } from '@angular/core';
// import SwiperCore from 'swiper';

import SwiperCore, { Navigation, Pagination} from 'swiper';

SwiperCore.use([Navigation,Pagination])


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }


  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  ngOnInit(): void {
  }

}
