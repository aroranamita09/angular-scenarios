import { Component, OnInit } from '@angular/core';
import { Service6Service } from './service6.service';
@Component({
  selector: 'app-service6',
  templateUrl: './service6.component.html',
  styleUrls: ['./service6.component.css']
})
export class Service6Component implements OnInit {
message: string;
  constructor(private data: Service6Service) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
newMessage() {
  this.data. changeMessage('hi m in newmessage');
}
}
