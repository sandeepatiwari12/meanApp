import { Component, OnInit } from '@angular/core';

import { single } from './data';
import { HomeService } from '../home.service';
import { Dashboard } from '../../../models/dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  single: Dashboard[];
  // single: any[];
  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#FF9933', '#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private homeService: HomeService) {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
    this.refreshData();
  }
  refreshData() {
    this.homeService.getDashboardData()
    .subscribe( dashboard =>
    this.single = dashboard);
  }

}
