import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';

interface VideoSource {
  id: number;
  quality: string;
  file_type: string;
  width: number;
  height: number;
  link: string;
}

interface Video {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  avg_color: string;
  video_files: VideoSource[];
}

interface VideoResponse {
  page: number;
  per_page: number;
  videos: Video[];
  total_results: number;
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  videosArray: Video[] = [];
  myOptions: NgxMasonryOptions = {
    gutter: 23,
  };

  @ViewChild('masonry') masonry: NgxMasonryComponent;
  @ViewChild('videoPlayer') videoplayer: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.GETVideos();
  }

  GETVideos() {
    const headers = new HttpHeaders({
      Authorization: '563492ad6f91700001000001be219c5343144be594fe8c4d3a123b29',
    });
    this.http
      .get(environment.videoBaseURL + 'popular', {
        headers,
      })
      .subscribe((res: VideoResponse) => {
        console.log('res: ', res.videos);
        if (res && res.videos) {
          this.videosArray = res.videos;
        }
      });
  }
}
