import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlobStorageService, DCPHttpService } from '../shared/services';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private service:DCPHttpService,private blobService:BlobStorageService) { 


    
  }
  getData(key:string) {
    const data = sessionStorage.getItem(key);
   
    if (data) {
      return JSON.parse(data);
    } else {
      return null ;
    }
  }
  setData(key:string,data: any): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  post(url: string, body: any, options?: any): Observable<any>{
    return this.service.post(url,body,options);
  }
  getJson(loc:string, options?: any):Observable<any>{
    return this.service.get(loc,options);
  }
  postBlob(content:any,options?:any):Observable<any>{
    return this.blobService.postBlob(content,options);

  }
  getBlobData(){
    return this.blobService.getBlobData();
    
  }
 
  }

