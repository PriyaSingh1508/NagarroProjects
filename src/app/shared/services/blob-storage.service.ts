import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
 
@Injectable({
  providedIn: 'root'
})
export class BlobStorageService {
   private blobService:BlobServiceClient;
   



 
  private blob="dcp/user/user.json";
  private url = `https://${environment.account}.blob.core.windows.net/${environment.container}/${this.blob}`;
  constructor(private http: HttpClient) { 
    this.blobService=new BlobServiceClient('https://tutorialfip.blob.core.windows.net')
  }  
  getUserData(): Observable<any> {     return this.http.get<any>(this.url);   }
  
  getBlobUrl(){
  
    const containerClient=this.blobService.getContainerClient(`${environment.container}`);
    const blobClient=containerClient.getBlockBlobClient("dcp/complaint/complaint.json");
    const blobExists=blobClient.exists();

    // if(!blobExists){
    //   blobClient.uploadData(new Blob([JSON.stringify({})]), {
    //     blobHTTPHeaders: {
    //       blobContentType: 'application/json'
    //     }
    //   });
    //   return blobClient.url;
    // }
    
    return blobClient.url;
  
  }
  postBlob(content:any,options?:any):Observable<any>{
    const url=this.getBlobUrl();
    return this.http.post<any>(url,content,options); 
  }
  async getBlobData(){
    const url=this.getBlobUrl();
    // return this.http.get<any>(url);
    const containerClient=this.blobService.getContainerClient(`${environment.container}`);
    const blobClient=containerClient.getBlockBlobClient("dcp/complaint/complaint.json");
  let content= await blobClient.downloadToFile;
  // let blobContent=(await content.blobBody)?.text();
  // console.log(blobContent)
  const fileReader= new FileReader()    
  


  }

}