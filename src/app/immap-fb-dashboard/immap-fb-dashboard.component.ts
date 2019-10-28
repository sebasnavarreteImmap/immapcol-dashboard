import { Component, OnInit } from '@angular/core';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-immap-fb-dashboard',
  templateUrl: './immap-fb-dashboard.component.html',
  styleUrls: ['./immap-fb-dashboard.component.scss']
})
export class ImmapFbDashboardComponent implements OnInit {

  constructor(gtag: Gtag) { }

  ngOnInit() {
  }

}
