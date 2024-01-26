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
  @Input() firstText: string = "";
  @Input() secondText: string = "";
  @Input() thirdText: string = "";
  @Input() fourthText: string = "";
  @Input() fifthText: string = "";
  @Input() sixthText: string = "";
  @Input() seventhText: string = "";
  @Input() eightText: string = "";

  //Experiences page
  @Input() esperienzeObj: EsperienzeModel[] = [];

  coloriLinea: string[] = ['#fcff33', '#33e0ff', '#ff33d3'];

  constructor() { }

  ngOnInit(): void {
  }
}
