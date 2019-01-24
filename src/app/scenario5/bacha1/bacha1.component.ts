import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bacha1',
  templateUrl: './bacha1.component.html',
  styleUrls: ['./bacha1.component.css']
})
export class Bacha1Component implements OnInit {
  @Input() inheritedname;
    scenarioname = '' ;
  constructor() { this.scenarioname = this.inheritedname; }
    ngOnInit() {
  }

}
