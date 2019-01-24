import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bacha2',
  templateUrl: './bacha2.component.html',
  styleUrls: ['./bacha2.component.css']
})
export class Bacha2Component implements OnInit {
 private name = '';
 getname(name) {this.name = name; }
  constructor() { }

  ngOnInit() {
  }

}
