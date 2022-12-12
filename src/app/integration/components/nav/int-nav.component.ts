import { Component, OnInit } from "@angular/core";

export interface NavRoute {
  path: string;
  title: string;
}

@Component({
  selector: 'app-int-nav',
  templateUrl: './int-nav.component.html',
  styleUrls: ['./int-nav.component.scss']
})
export class IntNavComponent implements OnInit {
  m_Routes: NavRoute[] = [
    {
      path: 'home',
      title: 'Home'
    },
    {
      path: 'bloodtypes',
      title: 'Blood Types'
    },
    {
      path: 'settings',
      title: 'Settings'
    },
    {
      path: 'eq-tender',
      title: 'Equipment Tenders'
    }
  ];

  constructor() { }

  ngOnInit() {}
}
