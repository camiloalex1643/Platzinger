import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AngularFireDatabase } from '@angular/fire/database';

//Este servicio puede ser inyectado en cualquier otro componente
//Root indica que puede estar en cualquier componente
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private angularFireDatabase: AngularFireDatabase) { }
  getUsers() {
    return this.angularFireDatabase.list('/users')
  }
  getUserById(uid) {
    return this.angularFireDatabase.object('/users/'+uid)
  }
  createUser(user) {
    return this.angularFireDatabase.object('/users/'+user.uid).set(user)
  }
  editUser(user) {
    return this.angularFireDatabase.object('/users/'+user.uid).set(user)
  }
  setAvatar(avatar, uid){
     return this.angularFireDatabase.object('/users/'+uid).set(avatar)
  }
}
