import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', './../../../../styles.scss'],
})
export class MenuComponent implements OnInit {
  currentRoute: string = '';
  coloredText: string = '';

  isMobileMenuOpen: boolean = false;

  isMobile: boolean = window.innerWidth < 495;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.currentRoute = this.router.url;
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

  manageMenu(open: boolean) {
    if(open) {
      this.isMobileMenuOpen = true;
    } else {
      this.isMobileMenuOpen = false;
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 495;
  }
}
