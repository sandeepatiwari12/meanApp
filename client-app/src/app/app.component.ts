import { ChangeDetectorRef, Component, HostListener, NgZone, ElementRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Navbar } from './models/modelFactory';
import { NavService } from './shared/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mobileQuery: MediaQueryList;
  public fillerNav: Navbar[];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private navService: NavService,
    private router: Router,
    private ngZone: NgZone) {

    // fettching the navbar data from database
    this.navService.getNavbarData()
      .subscribe(navbar =>
        this.fillerNav = navbar);

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
