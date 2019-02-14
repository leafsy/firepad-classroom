import { Component, OnInit, Input } from '@angular/core';
import { uniqueNamesGenerator } from 'unique-names-generator';
import { User } from '../models';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.less']
})
export class UserPanelComponent implements OnInit {

  @Input() ref : any;
  @Input() userId : number;

  users : User[];

  userName : string = uniqueNamesGenerator(' ', true);
  queryStr : string = '';

  constructor() { }

  ngOnInit() {
    this.nameChange();
    this.ref.on('value', snapshot => {
      const newUsers : User[] = [];
      snapshot.forEach(user => {
        newUsers.push({
          id: user.key,
          name: user.val().name,
          color: user.val().color
        });
      });
      this.users = newUsers;
    });
  }

  nameChange() {
    const nameRef = this.ref.child(this.userId).child('name');
    nameRef.onDisconnect().remove();
    nameRef.set(this.userName);
  }

  isMatch(name : string) {
    const matchStr = name.substring(0, this.queryStr.length);
    return this.queryStr.toLowerCase() === matchStr.toLowerCase();
  }

}