import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario5',
  templateUrl: './scenario5.component.html',
  styleUrls: ['./scenario5.component.css']
})
export class Scenario5Component implements OnInit {
  private finalinherit = '' ;
  constructor() { }
  @Input() inheritedscenarioname;
  setfinal() { this.finalinherit = this.inheritedscenarioname; }
  ngOnInit() {
  }

}
