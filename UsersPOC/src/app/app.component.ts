import { Component } from '@angular/core';
import { Users } from '../assets/userData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UsersPOC';
  userData = Users;
}
