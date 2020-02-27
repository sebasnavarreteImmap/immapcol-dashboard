import { Component, OnInit } from '@angular/core';
import { Gtag } from 'angular-gtag';
import {Globals} from '../globals'

@Component({
  selector: 'app-immap-fb-dashboard',
  templateUrl: './immap-fb-dashboard.component.html',
  styleUrls: ['./immap-fb-dashboard.component.scss']
})
export class ImmapFbDashboardComponent implements OnInit {

  constructor(gtag: Gtag, public globals: Globals) {
  }

  ngOnInit() {
  }

}
