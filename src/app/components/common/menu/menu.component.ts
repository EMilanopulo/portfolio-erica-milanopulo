import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', './../../../../styles.scss'],
})
export class MenuComponent implements OnInit {
  currentRoute: string = '';
  coloredText: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

        this.currentRoute = this.router.url;
      console.log(this.currentRoute)
  }

  navigateToPage(text: string) {
    switch (text) {
      case 'presentazione':
        this.router.navigate(['/presentazione']);
        break;
      case 'tecnologie':
        this.router.navigate(['/tecnologie']);
        break;
      case 'esperienze':
        this.router.navigate(['/esperienze']);
        break;
      case 'contatti':
        this.router.navigate(['/contatti']);
        break;
      case 'home':
        this.router.navigate(['/']);
        break;
    }
  }

  onMouseEnter(text: string) {
    this.coloredText = text;
  }

  onMouseLeave() {
    this.coloredText = '';
  }
}
