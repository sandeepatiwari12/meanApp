import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
employee = [
  {
    name: 'Sandeep Tiwari',
    designation: 'Software Developer',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum nunc eget neque bibendum, sit amet pellentesque felis vestibulum. Maecenas posuere tellus luctus odio rutrum convallis. Nunc vehicula turpis est, id varius tortor blandit nec. Aliquam sed suscipit erat, in consectetur sapien. Cras gravida euismod elit, id rutrum magna molestie et. Suspendisse vitae nisi lobortis, tincidunt justo ac, efficitur libero. Ut sodales elementum aliquam. Morbi eu aliquam urna, sit amet mollis neque. Nulla facilisi. Sed sit amet ante sit amet ipsum convallis commodo. Nunc pharetra ante nec convallis faucibus. Ut porttitor auctor nunc, condimentum viverra dui dapibus ac. Proin dictum interdum lectus sed bibendum',
    profilePic: 'https://lh3.googleusercontent.com/-oOm02CNvjd0/AAAAAAAAAAI/AAAAAAAAAJQ/tCDJ4tfuIhk/s120-p-rw-no/photo.jpg'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
