import { Component, EventEmitter, Output } from '@angular/core';

import { Star } from 'src/app/models/star.model';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.css']
})
export class StarsRatingComponent {

  @Output() starId = new EventEmitter<number>();

  selectedRating = 0;

  stars: Star[] = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }
  ];

  selectStar(value: number): void {
    this.stars.filter( (star) => {
      if ( star.id <= value){
        star.class = 'star-gold star star-hover';
      } else {
        star.class = 'star-gray star';
      }
      return star;
    });
    this.selectedRating = value;
    this.starId.emit(this.selectedRating);
  }
}
