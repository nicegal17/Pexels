import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-container',
  templateUrl: './user-info-container.component.html',
  styleUrls: ['./user-info-container.component.scss'],
})
export class UserInfoContainerComponent implements OnInit {
  @Input() user: string;

  constructor() {}

  ngOnInit(): void {}
}
