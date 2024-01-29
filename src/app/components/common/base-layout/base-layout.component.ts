import { Component, Input, OnInit } from '@angular/core';
import { EsperienzeModel } from 'src/app/models/esperienze-model';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss', './../../../../styles.scss']
})
export class BaseLayoutComponent implements OnInit {
  //For all pages
  @Input() title: string = "";
  @Input() textContent: string = "";

  //Only for Technologies page
  @Input() technologies: string[] = [];

  //Experiences page
  @Input() esperienzeObj: EsperienzeModel[] = [];

  coloriLinea: string[] = ['#fcff33', '#33e0ff', '#ff33d3'];

  getAnimationClass(index: number): string {
    return index % 2 === 0 ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight';
  }

  constructor() { }

  ngOnInit(): void {
  }
}
