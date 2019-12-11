import { Directive, ElementRef, OnInit } from '@angular/core';
import {} from 'googlemaps';

@Directive({
  selector: '[appCities]'
})
export class CitiesDirective implements OnInit {
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
  }

}

