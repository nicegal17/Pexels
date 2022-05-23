import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/shared/models/photo';

@Component({
  selector: 'app-pexel-image',
  templateUrl: './pexel-image.component.html',
  styleUrls: ['./pexel-image.component.scss'],
})
export class PexelImageComponent implements OnInit {
  @Input() photo: Photo;

  constructor() {}

  ngOnInit(): void {}
}
