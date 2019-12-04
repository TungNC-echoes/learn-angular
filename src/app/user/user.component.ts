import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = '';
  eventStyle = { color: 'red', fontSize: '30px' };
  oddStyle = { color: 'blue', fontSize: '10px' };
  inHightLight = true;
  currentClass = { square: !this.inHightLight, circle: this.inHightLight };
  constructor() { }
  ngOnInit() {
  }
}
