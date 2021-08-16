import { Component, OnInit } from '@angular/core';
import {
  faCog,
  faPlus,
  faBell,
  faMousePointer,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faCog = faCog;
  faPlus = faPlus;
  faBell = faBell;

  faMousePointer = faMousePointer;
  constructor() {}

  ngOnInit(): void {}
}
