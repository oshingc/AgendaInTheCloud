import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { User } from './user.model'; 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: AngularFireList<any>;
  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.userList = this.firebase.list('users');
    return this.userList;
  }

  addUser(user: User){
    this.userList.push({
      name: user.name,
      mail: user.mail
    });
  }

  updateUser(user: User){
    this.userList.update(user.$key, {
      name: user.name,
      mail: user.mail
    });
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }
}
