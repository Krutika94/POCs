import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/assets/userData';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() userData?: User[];
  hideData: boolean = true;
  selectedUserData: any;
  constructor() { }

  ngOnInit(): void {
  }

  selectedUser(user: User) {
    this.hideData = false;
    this.selectedUserData = user;
  }

}
