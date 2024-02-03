import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-15',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './card-15.component.html',
  styleUrl: './card-15.component.scss'
})
export class Card15Component {

  aafiyaImages = [
    '../../../../../assets/images/groom.png',
    '../../../../../assets/images/groom.png',
    '../../../../../assets/images/groom.png',
  ];

  aaliyaImages = [
    '../../../../../assets/images/groom.png',
    '../../../../../assets/images/groom.png',
    '../../../../../assets/images/groom.png',
  ];

  aliImages = [
    '../../../../../assets/images/groom.png',
    '../../../../../assets/images/groom.png',
    '../../../../../assets/images/groom.png',
  ];

  
  @ViewChild('carousel', { static: true }) carousel1: NgbCarousel | undefined;
  @ViewChild('carousel', { static: true }) carousel2: NgbCarousel | undefined;
  @ViewChild('carousel', { static: true }) carousel3: NgbCarousel | undefined;
}
