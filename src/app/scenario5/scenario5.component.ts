import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Bacha1Component } from './bacha1/bacha1.component';
@Component({
  selector: 'app-scenario5',
  templateUrl: './scenario5.component.html',
  styleUrls: ['./scenario5.component.css']
})
export class Scenario5Component implements AfterViewInit {
@ViewChild(Bacha1Component) bacha;
  private impmessage = '';
  constructor() { }
  ngAfterViewInit() {
    this.impmessage = this.bacha.message;
  }
}
