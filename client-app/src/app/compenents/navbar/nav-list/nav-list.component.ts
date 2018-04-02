import { ChangeDetectorRef, OnInit, Component, HostListener, NgZone, ElementRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Navbar } from '../../../models/modelFactory';
import { NavService } from '../navbar.service';
import { User } from '../../../models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  public numItemsCount = 10;
  public navNotFound: boolean;
  public mobileQuery: MediaQueryList;
  public fillerNav: Navbar[];
  users: User[] = [];
  loggedInUserName: any;
  // <i class="material-icons">account_balance</i>
  // fillerNav = [
  //   {
  //     name: 'Dashboard',
  //     link: '/',
  //     class: 'material-icons',
  //     icon: ''
  //   }
  // ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService,
    private navService: NavService,
    private router: Router,
    private ngZone: NgZone) {

    this.navNotFound = true;
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
    this.loggedInUserName = localStorage.getItem('user');
    // console.log('from the NavList Component', this.loggedInUserName);
  }

  ngOnInit() {
    this.redreshData();
  }

  // Function to logout user
  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  showProfile() {
    this.router.navigate(['/profile']);
  }
  redreshData() {
    // fettching the navbar data from database
    this.navService.getNavbarData()
      .subscribe(data => {
        this.fillerNav = data.navbar;
        // console.log('this.fillerNav', this.fillerNav);

        if (this.fillerNav.length) {
          this.navNotFound = false;
        } else {
          this.navNotFound = true;
        }
      });

  }

}
