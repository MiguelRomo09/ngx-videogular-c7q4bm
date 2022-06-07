import { Component, OnInit } from "@angular/core";

import { VgAPI } from "ngx-videogular";

export interface IMedia {
  title: string;
  src: string;
  poster: string;
  type: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  playlist: Array<IMedia> = [
    {
      title: "Pale Blue Dot",
      src: "http://static.videogular.com/assets/videos/videogular.mp4",
      poster:
        "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg",
      type: "video/mp4"
    },
    {
      title: "Big Buck Bunny",
      src:
        "http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov",
      poster:
        "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg",
      type: "video/mp4"
    },
    {
      title: "Elephants Dream",
      src: "http://static.videogular.com/assets/videos/elephants-dream.mp4",
      poster:
        "https://3.img-dpreview.com/files/p/E~TS590x0~articles/8692662059/8283897908.jpeg",
      type: "video/mp4"
    }
  ];

  currentIndex = 0;
  currentItem: IMedia = this.playlist[this.currentIndex];
  api: VgAPI;

  constructor() {}

  ngOnInit(): void {}

  onPlayerReady(api: VgAPI) {
    this.api = api;

    this.api
      .getDefaultMedia()
      .subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api
      .getDefaultMedia()
      .subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    this.currentItem = this.playlist[this.currentIndex];
  }

  playVideo() {
    this.api.play();
  }

  onClickPlaylistItem(item: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = item;
  }
}
