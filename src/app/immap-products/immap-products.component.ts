import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { zoomIn, zoomOut } from 'ngx-animate';

import { products } from '../../assets/products';

@Component({
  selector: 'app-immap-products',
  templateUrl: './immap-products.component.html',
  styleUrls: ['./immap-products.component.scss'],
  animations: [
    trigger('zoomIn', [transition('void => *', useAnimation(zoomIn, {params: { timing: 0.5, delay: 0 }}))]),
    trigger('zoomOut', [transition('* => void', useAnimation(zoomOut, {params: { timing: 0.5, delay: 0 }}))]),
  ],
})
export class ImmapProductsComponent implements OnInit, AfterViewInit {
  products = products;
  filterValue: any = { name: '',
                        URL: '',
                        img: '',
                        type: ''
                      };
  zoomIn:any;
  zoomOut:any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
