import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

name: string = 'Interpolation Component';
  cars = ['BMW', 'Subaru', 'Toyota'];
  person = { name: 'Laveen', age: 23, car: 'Toyota' };
  isRich = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.name = 'Interpolation Component 2.0.0';
    }, 4000);
  }

  numberOfCars = () => {
    return this.cars.length;
  };
}

  

