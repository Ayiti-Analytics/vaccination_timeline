import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Dose } from '../models/vaccine';

@Injectable({
  providedIn: "root"
})
export class VaccineService {
  public items: Observable<any[]>;
  public doseList: Observable<Dose[]>;
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
    return this.itemsCollection.doc(item.vaccineName).set(item);
  }

  public addDose(item: any) {
    
    return this.doseListCollection.doc(item.vaccineName+'-'+item.doseNumber).set(item);
  }
  public doseExists(doseNumber: string): boolean{
    let exists = false;
    this.doseListCollection = this.db.collection('doses', ref => ref.where('doseNumber', '==',doseNumber));
    this.doseListCollection.valueChanges().subscribe(values =>{
      if(values.length >0){
        exists = true;
      }
    })

    return exists;
  }
  public vaccineExists(vaccineName: string){
    let length = 0
    this.itemsCollection = this.db.collection('vaccines', ref => ref.where('vaccineName', '==',vaccineName));
    this.itemsCollection.valueChanges().subscribe(values =>{
      if(values.length >0){
        length = values.length;
      }
    })

    return length;
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
  getDoseByVaccin(vaccineId: string): Observable<any[]> {
    this.doseListCollection = this.db.collection('doses', ref => ref.where('Idvaccine', '==',vaccineId));
    this.doseList  = this.doseListCollection.snapshotChanges().pipe(
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
    this.doseList = this.doseListCollection.snapshotChanges().pipe(
      map(actions => {
        this.countItems = actions.length;
        return actions.map(action => ({
          id: action.payload.doc.id,
          ...action.payload.doc.data()
        }));
      })
    );
    return this.doseList ;
  }
}
