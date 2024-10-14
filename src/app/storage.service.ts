import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // private _storage: Storage | null = null;

  constructor(private storage: Storage){
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this.storage = storage;
  }


  public async set (key : string , value:any){
    let result =  await this.storage?.set(key,value);
    console.log(result)
  }


  public async get (key:string){
    let value  = await this.storage?.get(key);
    console.log(value);
    return value;
  }


  public async remove (key:string){
    let value =  await this.storage?.remove(key);
  }

  public async clear(key:string){

    let value = await this. storage?.clear();
  }

  
}
