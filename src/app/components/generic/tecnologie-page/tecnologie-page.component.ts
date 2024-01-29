import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologie-page',
  templateUrl: './tecnologie-page.component.html',
  styleUrls: ['./tecnologie-page.component.scss'],
})
export class TecnologiePageComponent implements OnInit {
  technologies: string[] = [
    'HTML',
    'CSS',
    'Sass',
    'JavaScript',
    'TypeScrypt',
    'Angular',
    'Shopify',
    'Basi di React e React Native'
  ];

  constructor() {}

  ngOnInit(): void {}
}
