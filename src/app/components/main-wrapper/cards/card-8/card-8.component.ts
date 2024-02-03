import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-8',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './card-8.component.html',
  styleUrl: './card-8.component.scss'
})
export class Card8Component {

  images = [
    '../../../../../assets/images/groom.png',
    '../../../../../assets/images/groom.png',
    '../../../../../assets/images/groom.png',
    '../../../../../assets/images/groom.png',
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;
}
