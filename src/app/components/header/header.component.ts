import {Component, HostListener, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationEnd, Router, RouterModule} from '@angular/router';
import {tap} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isNavExpanded = false;
  isHome = true;

  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.pipe(
      tap(event => {
        if (event instanceof NavigationEnd) {
          this.isHome = event.url === '/';
          this.isNavExpanded = false;
        }
      })
    ).subscribe();
  }

  toggleNav() {
    this.isNavExpanded = !this.isNavExpanded;
  }
}
