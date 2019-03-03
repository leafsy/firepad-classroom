import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { uniqueNamesGenerator } from 'unique-names-generator';
import { User } from '../models';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.less']
})
export class UserPanelComponent implements OnInit {

  @Input() ownerId: string;
  @Input() activeUser: string;
  @Output() activeUserChange = new EventEmitter();

  userId: string;
  owner: User;
  users: User[];

  userName: string = uniqueNamesGenerator(' ', true);
  queryStr = '';

  constructor(private service: FirebaseService) {
    this.userId = this.service.getUserId();
  }

  ngOnInit() {
    this.nameChange();
    this.service.onValue('users', users => setTimeout(() => {
      if (!users) { return; }
      const newUsers: User[] = [];
      for (const id of Object.keys(users)) {
        const newUser = {
          id,
          name: users[id].name,
          color: users[id].color
        };
        if (newUser.id === this.ownerId) {
          this.owner = newUser;
        } else {
          newUsers.push(newUser);
        }
      }
      this.users = newUsers;
    }));
  }

  nameChange() {
    this.service.setValue(`users/${this.userId}/name`, this.userName);
    this.service.removeOnDisconnect(`users/${this.userId}/name`);
  }

  isMatch(name: string) {
    return name && this.queryStr.toLowerCase() ===
      name.substring(0, this.queryStr.length).toLowerCase();
  }

  userChange(user: User) {
    this.activeUserChange.emit(user.id);
  }

}
