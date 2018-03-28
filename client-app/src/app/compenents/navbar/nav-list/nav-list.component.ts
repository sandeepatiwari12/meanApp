import { ChangeDetectorRef, OnInit, Component, HostListener, NgZone, ElementRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Navbar } from '../../../models/modelFactory';
import { NavService } from '../navbar.service';
import { AuthenticationService } from '../../../shared/_services/index';
import { UserService } from '../../../shared/_services/index';
import { User } from '../../../models/user';

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

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private navService: NavService,
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private ngZone: NgZone) {

    // this.fillerNav = this.staticNav[];
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

    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
      console.log('this.users', this.users);
    });
  }

  ngOnInit() {
    this.redreshData();
  }

  redreshData() {
    // fettching the navbar data from database
    this.navService.getNavbarData()
      .subscribe(navbar => {
        this.fillerNav = navbar;

        if (this.fillerNav.length) {
          this.navNotFound = false;
        } else {
          this.navNotFound = true;
        }
      });

  }

  // logout()
  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }
}
