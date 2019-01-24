import { Component, OnInit, Input} from '@angular/core';
import { Scenario3Component } from '../scenario3.component';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }
  @Input() scenario3;
  ngOnInit() {
  }

}
