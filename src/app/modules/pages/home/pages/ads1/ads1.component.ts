import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads1',
  templateUrl: './ads1.component.html',
  styleUrls: ['./ads1.component.css']
})
export class Ads1Component implements OnInit {

  slides = [
    { url: '/assets/img/covidVactination.png', title: '1' },
    { url: '/assets/img/bloodDonor2.jpg', title: '2' },
    { url: '/assets/img/bloodDonor1.jpg', title: '3' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
