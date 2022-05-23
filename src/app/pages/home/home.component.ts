import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { Photo, PhotoResponse } from 'src/app/shared/models/photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  photosArray: Photo[] = [];
  myOptions: NgxMasonryOptions = {
    gutter: 23,
  };
  @ViewChild('masonry') masonry: NgxMasonryComponent;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.GETPhotos();
  }

  GETPhotos() {
    const headers = new HttpHeaders({
      Authorization: '563492ad6f91700001000001be219c5343144be594fe8c4d3a123b29',
    });
    this.http
      .get(environment.baseUrl + 'curated', {
        headers,
      })
      .subscribe((res: PhotoResponse) => {
        console.log(res);
        if (res && res.photos) {
          this.photosArray = res.photos;
          console.log('this.photosArray: ', this.photosArray);
        }
      });
  }
}
