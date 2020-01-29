import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HtaBounderiesService {
public communes: Observable<any[]>;
public secCommunales: Observable<any[]>;
public communesCollection: AngularFirestoreCollection<any[]>;
public secCommunalesCollection: AngularFirestoreCollection<any[]>;

  constructor(private db: AngularFirestore) {
      this.communesCollection = db.collection('com');
      this.communes = this.communesCollection.valueChanges();
    }

getSecCom(adm2en: string): Observable<any[]> {
  this.secCommunalesCollection = this.db.collection('sec_com', ref => ref.where('adm2_en', '==', adm2en));
  this.secCommunales = this.secCommunalesCollection.valueChanges();
  return this.secCommunales;

}
}
