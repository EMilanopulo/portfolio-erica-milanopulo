import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
