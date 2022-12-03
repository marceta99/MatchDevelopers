import { Component } from '@angular/core';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [slideInAnimation]
})
export class SidebarComponent {

}
