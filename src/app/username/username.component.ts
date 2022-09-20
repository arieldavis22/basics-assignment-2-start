import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  name = '';
  isDisabled = true;

  constructor() {}

  ngOnInit(): void {}

  onUpdate(e: Event) {
    console.log(this.name.length);

    if (this.name.length == 0) this.isDisabled = true;
    else this.isDisabled = false;
  }

  onClick() {
    this.isDisabled = true;
    this.name = '';
  }
}
