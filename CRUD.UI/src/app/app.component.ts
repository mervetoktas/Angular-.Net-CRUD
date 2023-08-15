import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { user } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD.UI';
  users: user[] = [];
  userToEdit?: user;

  constructor(private userService: UserService) {}

  ngOnInit() : void 
  {
    this.userService.getUser().subscribe((result:user[]) => (this.users = result));
  }

  updateUserList(users: user[])
  {
    this.users = users;
  }

  initNewUser()
  {
    this.userToEdit = new user();
  }

  editUser(thisUser: user)
  {
    this.userToEdit = thisUser;
  }
}
