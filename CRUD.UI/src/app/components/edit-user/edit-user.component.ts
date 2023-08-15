import { outputAst } from '@angular/compiler';
import { Component, Input, EventEmitter, Output, OnInit} from '@angular/core';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input() thisUser?: user;
  @Output() usersUpdated = new EventEmitter<user[]>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  updateUser(thisUser: user) 
  {
    this.userService
      .updateUser(thisUser)
      .subscribe((users: user[]) => this.usersUpdated.emit(users));
  }

  deleteUser(thisUser: user) { 
    this.userService
      .deleteUser(thisUser)
      .subscribe((users: user[]) => this.usersUpdated.emit(users));
  }

  createUser(thisUser: user) {
    this.userService
    .createUser(thisUser)
    .subscribe((users: user[]) => this.usersUpdated.emit(users));
  }
}

