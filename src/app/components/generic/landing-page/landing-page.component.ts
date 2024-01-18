import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  @Input() isUpperPart: boolean = true;

  startColoring: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.startColoring = true;
    }, 1000);
  }

  ngOnDestroy(): void {
    this.startColoring = false;
  }
}
