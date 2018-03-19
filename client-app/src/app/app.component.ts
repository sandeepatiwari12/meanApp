import {ChangeDetectorRef, Component, HostListener, NgZone, ElementRef, ViewChild} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router, ActivatedRoute, Params  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileQuery: MediaQueryList;

  // for dynamic side navs
   fillerNav = [
    {
      name: 'Home',
      link: '/',
      icon: 'home',
      class: 'material-icons'
    },
    {
      name: 'Customers',
      link: '/customers',
      icon: 'perm_identity',
      class: 'material-icons'

    },
    {
      name: 'Orders',
      link: '/orders',
      icon: 'shopping_cart',
      class: 'material-icons'
    },
    {
      name: 'About',
      link: '/about',
      icon: 'info',
      class: 'material-icons'
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: 'perm_contact_calendar',
      class: 'material-icons'
    }
  ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private ngZone: NgZone) {

    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // window onload
    window.onload = (e) => {
      this.mobileQuery = media.matchMedia('(max-width: 768px)');
    };
    // window onresize
    window.onresize = (e) => {
      this.mobileQuery = media.matchMedia('(max-width: 768px)');
    };
  }
}
