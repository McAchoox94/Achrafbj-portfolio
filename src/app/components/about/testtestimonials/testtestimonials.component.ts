import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  Swiper
} from "swiper";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-testtestimonials',
  templateUrl: './testtestimonials.component.html',
  styleUrls: ['./testtestimonials.component.scss']
})
export class TesttestimonialsComponent implements OnInit {

  @ViewChild("swiperRef", { static: false }) swiperRef?: Swiper;

  mySwiper: Swiper;

  constructor(private cd: ChangeDetectorRef) { }


  ngOnInit(): void {
  }

  controlledSwiper: any;
  setControlledSwiper(swiper: any) {
    this.controlledSwiper = swiper;
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
