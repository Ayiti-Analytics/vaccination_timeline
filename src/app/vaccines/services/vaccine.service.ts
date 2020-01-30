import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class VaccineService {
  public items: Observable<any[]>;
  public doseList: Observable<any[]>;
  public dose: Observable<any>;
  public item: Observable<any>;
  countItems = 0;
  private itemsCollection: AngularFirestoreCollection<any>;
  private doseListCollection: AngularFirestoreCollection<any>;
  private itemDoc: AngularFirestoreDocument<any>;

  constructor(private db: AngularFirestore) {
    this.itemsCollection = db.collection("vaccines");
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => {
        this.countItems = actions.length;
        return actions.map(action => ({
          id: action.payload.doc.id,
          ...action.payload.doc.data()
        }));
      })
    );
    this.doseListCollection = db.collection("doses");
    this.doseList = this.doseListCollection.snapshotChanges().pipe(
      map(actions => {
        this.countItems = actions.length;
        return actions.map(action => ({
          id: action.payload.doc.id,
          ...action.payload.doc.data()
        }));
      })
    );
  }
  public addVaccine(item: any) {
    return this.itemsCollection.add(item);
  }

  public addDose(item: any) {
    return this.doseListCollection.add(item);
  }
  public getVaccine(uid: string) {
    return this.itemsCollection.doc(uid).valueChanges();

    /*
      .pipe(
        map(changes => {
          const data = changes.payload.data();
          const id = changes.payload.id;
          return { id, ...data };
        }));
      return this.item;
      */
  }
  public getDose(uid: string) {
    return this.doseListCollection.doc(uid).valueChanges();

    /*
      .pipe(
        map(changes => {
          const data = changes.payload.data();
          const id = changes.payload.id;
          return { id, ...data };
        }));
      return this.item;
      */
  }
  public updateVaccine(id: any, child: any) {
    return this.itemsCollection.doc(id).update(child);
  }
  public updateDose(id: any, child: any) {
    return this.doseListCollection.doc(id).update(child);
  }
  getVaccines() {
    this.itemsCollection = this.db.collection("vaccines");
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => {
        this.countItems = actions.length;
        return actions.map(action => ({
          id: action.payload.doc.id,
          ...action.payload.doc.data()
        }));
      })
    );
    return this.items;
  }
  getDoseList() {
    this.doseListCollection = this.db.collection("doses");
    this.items = this.doseListCollection.snapshotChanges().pipe(
      map(actions => {
        this.countItems = actions.length;
        return actions.map(action => ({
          id: action.payload.doc.id,
          ...action.payload.doc.data()
        }));
      })
    );
    return this.items;
  }
}
