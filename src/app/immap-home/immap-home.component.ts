import { Component, OnInit } from '@angular/core';
import { Gtag } from 'angular-gtag';
import {Globals} from '../globals'

@Component({
  selector: 'app-immap-home',
  templateUrl: './immap-home.component.html',
  styleUrls: ['./immap-home.component.scss']
})
export class ImmapHomeComponent implements OnInit {

  constructor(gtag: Gtag, public globals: Globals) { }

  ngOnInit() {
  }

}
