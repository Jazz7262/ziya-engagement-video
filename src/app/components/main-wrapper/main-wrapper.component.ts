import { AfterViewInit, Component } from '@angular/core';
import { Card1Component } from './cards/card-1/card-1.component';
import { Card2Component } from './cards/card-2/card-2.component';
import { Card3Component } from './cards/card-3/card-3.component';
import { Card4Component } from './cards/card-4/card-4.component';
import { Card5Component } from './cards/card-5/card-5.component';
import { Card6Component } from './cards/card-6/card-6.component';
import { Card7Component } from './cards/card-7/card-7.component';
import { Card8Component } from './cards/card-8/card-8.component';
import { Card9Component } from './cards/card-9/card-9.component';
import { Card10Component } from './cards/card-10/card-10.component';
import { Card11Component } from './cards/card-11/card-11.component';
import { Card12Component } from './cards/card-12/card-12.component';
import { Card13Component } from './cards/card-13/card-13.component';
import { Card14Component } from './cards/card-14/card-14.component';
import { Card15Component } from './cards/card-15/card-15.component';
import { Card16Component } from './cards/card-16/card-16.component';
import $ from 'jquery';

@Component({
  selector: 'app-main-wrapper',
  standalone: true,
  imports: [
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component,
    Card7Component,
    Card8Component,
    Card9Component,
    Card10Component,
    Card11Component,
    Card12Component,
    Card13Component,
    Card14Component,
    Card15Component,
    Card16Component
  ],
  templateUrl: './main-wrapper.component.html',
  styleUrl: './main-wrapper.component.scss'
})
export class MainWrapperComponent implements AfterViewInit {

  x: number = 5862;
  y: number = 103;

  async ngAfterViewInit() {

    // setTimeout(() => {
      
    //   setTimeout(() => {

    //     window.scrollTo({ left: 5862, top: 103, behavior: 'smooth' });  // card-1
    //     // window.scrollTo(3942, 103);  // card-2
    //     // window.scrollTo(3942, 1183);  // card-6
    //     // window.scrollTo(2022, 103);  // card-3
    //     // window.scrollTo(102, 1183);  // card-8
    //     // window.scrollTo(2022, 2263);  // card-11
    //     // window.scrollTo(102, 3343);  // card-16
    //     // window.scrollTo(2022, 3343);  // card-15
    //     // window.scrollTo(3942, 2263);  // card-10
    //     // window.scrollTo(5862, 3343);  // card-13
    //     // window.scrollTo(102, 2263);  // card-12
    //     // window.scrollTo(102, 103);  // card-4
    //     // window.scrollTo(2022, 1183);  // card-7
    //     // window.scrollTo(3942, 3343);  // card-14
    //     // window.scrollTo(5862, 1183);  // card-5
    //     // window.scrollTo(5862, 2263);  // card-9
  
    //   }, 1000);
  
  
  
    //   // scroll to card-2
    //   setTimeout(() => {
  
    //     window.scrollTo({ left: 3942, top: 103, behavior: 'smooth' });  // card-2
    //   }, 5000);
  
    //   // scroll to card-6
    //   setTimeout(() => {
  
    //     window.scrollTo({ left: 3942, top: 1183, behavior: 'smooth' });  // card-2
    //   }, 7000);
  
    //   // scroll to card-3
    //   setTimeout(() => {
  
    //     window.scrollTo({ left: 2022, top: 103, behavior: 'smooth' });  // card-3
    //   }, 10000);
  
      
    //   // scroll to card-8
    //   setTimeout(() => {
  
    //     window.scrollTo({ left: 102, top: 1183, behavior: 'smooth' });  // card-8
    //   }, 13000);
  
      
    //   // scroll to card-11
    //   setTimeout(() => {
  
    //     window.scrollTo({ left: 2022, top: 2263, behavior: 'smooth' });  // card-11
    //   }, 21000);
  
      
    //   // scroll to card-16
    //   setTimeout(() => {
  
    //     window.scrollTo({ left: 102, top: 3343, behavior: 'smooth' });  // card-16
    //   }, 29000);
  
      
    //   // scroll to card-15
    //   setTimeout(() => {
  
    //     window.scrollTo({ left: 2022, top: 3343, behavior: 'smooth' });  // card-15
    //   }, 31000);
  
      
    //   // scroll to card-10
    //   setTimeout(() => {
  
    //     window.scrollTo({ left: 3942, top: 2263, behavior: 'smooth' });  // card-10
    //   }, 36000);
  
      
  
    //   // scroll to card-13
    //   setTimeout(() => {
  
    //     window.scrollTo({ left: 5862, top: 3343, behavior: 'smooth' });  // card-2
    //   }, 38000);
  
  
  
    //   // zoom out the main wrapper
    //   setTimeout(() => {
  
    //     $('.main-wrapper').animate({
    //       zoom: 0.225,
    //     }, 1500)
  
    //     setTimeout(() => {
  
  
    //       $('body').css({ 'display': 'flex' });
  
    //     }, 1500)
    //   }, 40000);
  

    // }, 5000);

    

  }


  scrollTo(x: number, y: number, xDir: number, yDir: number) {

    // this.x = 5862;
    // this.y = 103;

    // x = 3942;
    // y = 1183;

    // xDir = -1;
    // yDir = 0;

    if (x === this.x && y === this.y) {
      return;
    } else {

      if (xDir > 0) {
        this.x += 16;
      } else if (xDir < 0) {
        this.x -= 16;
      }

      if (yDir > 0) {
        this.y += 9;
      } else if (yDir < 0) {
        this.y -= 9;
      }

      window.scrollTo({
        top: this.y,
        left: this.x,
      })

      console.log('this.x: ', this.x);
      console.log('this.y: ', this.y);
      console.log('x: ', x);
      console.log('y: ', y);

      setTimeout(() => {
        this.scrollTo(x, y, xDir, yDir);
      }, 20);
    }

  }


}
