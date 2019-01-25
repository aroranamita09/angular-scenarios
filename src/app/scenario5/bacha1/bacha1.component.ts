import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Bacha2Component } from './bacha2/bacha2.component';
@Component({
  selector: 'app-bacha1',
  templateUrl: './bacha1.component.html',
  styleUrls: ['./bacha1.component.css']
})
export class Bacha1Component implements AfterViewInit {
  private message = '';
  @ViewChild(Bacha2Component) nameb;
    ngAfterViewInit() {
      this.message = name;
  }

}
