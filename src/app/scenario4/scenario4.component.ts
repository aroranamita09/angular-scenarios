import { Component, OnInit,Input } from '@angular/core';
import { Child2Component } from './child2/child2.component';
@Component({
  selector: 'app-scenario4',
  templateUrl: './scenario4.component.html',
  styleUrls: ['./scenario4.component.css']
})
export class Scenario4Component implements OnInit {
  @Input() inheritedname;
  constructor() { }

  ngOnInit() {
  }

}
