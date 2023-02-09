import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  constructor(private afs: AngularFirestore) {}

  addSubs(subsData: any) {
    this.afs
      .collection('subscribers')
      .add(subsData)
      .then(() => {
        console.log('Subscriber saved successfully');
      });
  }

  checkEmail(email: any) {
   return this.afs.collection('subscribers', ref => ref.where('email', '==', email)).get()
  }
}
