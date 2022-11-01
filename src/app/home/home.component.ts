import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  headername = "Angular Tutorial";

  isdisabled: boolean = false;

  colorname = "red";

  classname = 'headclass';
  stylevalue = { "color": "yellow", "font-size": "60px" };

  ngOnInit(): void {
  }

  Functionclick(name: string) {
    alert(name);
  }

}
