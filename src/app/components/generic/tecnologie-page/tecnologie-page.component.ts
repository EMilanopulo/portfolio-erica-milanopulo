import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologie-page',
  templateUrl: './tecnologie-page.component.html',
  styleUrls: ['./tecnologie-page.component.scss'],
})
export class TecnologiePageComponent implements OnInit {
  first: string = `HTML`;
  second: string = 'CSS';
  third: string = 'Sass';
  fourth: string = 'JavaScript';
  fifth: string = 'TypeScrypt';
  sixth: string = "Angular";
  seventh: string = 'Basi di React';
  eight: string = 'Basi di Flutter'

  constructor() {}

  ngOnInit(): void {}
}
