import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    imports: [HeaderComponent, RouterOutlet, FooterComponent]
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
