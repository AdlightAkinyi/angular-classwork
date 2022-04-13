import { Component, OnInit ,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Output() addcity = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    
      this.addcity.emit('Nairobi'); 
  }

  }
