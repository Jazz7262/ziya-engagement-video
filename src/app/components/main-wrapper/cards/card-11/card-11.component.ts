import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-11',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './card-11.component.html',
  styleUrl: './card-11.component.scss'
})
export class Card11Component {

  
  images = [
    '../../../../../assets/images/bride.png',
    '../../../../../assets/images/bride.png',
    '../../../../../assets/images/bride.png',
    '../../../../../assets/images/bride.png',
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;
}
