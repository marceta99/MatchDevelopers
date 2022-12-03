import { Component } from '@angular/core';
import { routeStateTrigger, slideInAnimation } from './route-animation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [routeStateTrigger]
})
export class SidebarComponent {

}
