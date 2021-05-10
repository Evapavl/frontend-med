import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[descriptionMarker]'
})
export class DescriptionMarkerDirective {
  @Input('descriptionMarker') zoom?: number;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    if (this.zoom) {
      if (this.zoom >= 21) {
        this.el.nativeElement.style.fontSize = '16px';
      } if (this.zoom >= 14 && this.zoom <= 17) {
        this.el.nativeElement.style.fontSize = '12px';
      } if (this.zoom <= 14) {
        this.el.nativeElement.style.visibility = 'hidden';
      } else {
        this.el.nativeElement.style.visibility = 'visible';
      }
    }
  }
}