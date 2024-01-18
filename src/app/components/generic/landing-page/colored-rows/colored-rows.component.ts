import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-colored-rows',
  templateUrl: './colored-rows.component.html',
  styleUrls: ['./colored-rows.component.scss'],
})
export class ColoredRowsComponent implements OnInit {
  @Input() isUpperPart: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  get receivedData(): boolean {
    return this.isUpperPart;
  }
}
