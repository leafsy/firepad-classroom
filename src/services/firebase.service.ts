import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private root : firebase.database.Reference;
  private ref : firebase.database.Reference;
  private id : string = Math.floor(Math.random()*9999999999).toString();

  constructor() {
  	firebase.initializeApp(environment.firebase);
    this.root = firebase.database().ref();
  }

  findKey(key : string, success, failure) {
    this.root.once('value', snapshot => {
      try {
        if (snapshot.hasChild(key)) {
          return success();
        }
      } catch(err) {} // key is empty or contains illegal characters
      failure();
    });
  }

  setRef(key? : string) {
    this.ref = key? this.root.child(key) : this.root.push();
  }

  getRef() {
    return this.ref;
  }

  getRefKey() {
    return this.ref? this.ref.key : '';
  }

  getUserId() {
    return this.id;
  }

  setValue(path : string, val : string) {
    this.ref && this.ref.child(path).set(val);
  }

  onceValue(path : string, callback) {
    this.ref && this.ref.child(path).once('value', snapshot => {
      callback(snapshot.val());
    });
  }

  onValue(path : string, callback) {
    this.ref && this.ref.child(path).on('value', snapshot => {
      callback(snapshot.val());
    });
  }

  removeOnDisconnect(path? : string) {
    if (this.ref) {
      const ref = path? this.ref.child(path) : this.ref;
      ref.onDisconnect().remove();
    }
  }

}
