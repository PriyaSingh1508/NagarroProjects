import { Injectable } from '@angular/core';
import { DCPHttpService } from '../shared/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MycomplaintsService {

  constructor(private http:DCPHttpService) { }
  getData(url:string):Observable<Response>{
   return this.http.get(url);
  }
  // getData<T>(endpoint: string): Observable<T> {
  //   return this.commonHttp.get<T>(endpoint);
  // }
}

export interface ComplaintModel{
 
    status: string,
    complaintId: string,
    complaintTitle:string,
    daysBack:1,
    amount:string
  
}