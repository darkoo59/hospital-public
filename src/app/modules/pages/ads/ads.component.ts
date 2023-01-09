import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  constructor() { }

  public slides = [
    { src: '/assets/img/img1.jpg' },
    { src: '/assets/img/img2.jpg' },
    { src: '/assets/img/img3.jpg' }
];

  ngOnInit() {
  }

}
