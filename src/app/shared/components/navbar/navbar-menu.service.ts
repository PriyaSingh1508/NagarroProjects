import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DCPHttpService } from '../../services';

@Injectable()
export class NavbarMenuService {
  menus: any;

  constructor(private http: DCPHttpService) {}

  // Method use to get menu detail
  public getMenuDetail(url: string): Observable<any> {
    return this.http.get(url).pipe((response) => {
      return response;
    });
  }
}
