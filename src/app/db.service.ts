import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private url ='http://localhost:3000/data'

  constructor(private http:HttpClient) { }

  getdata():Observable<any>{
    return this.http.get<any>(this.url);
  }
  postdata(data:any):Observable<any>{
    return this.http.post<any>(this.url,data);
  }
  deletedata(id:any,data:any):Observable<any>{
    return this.http.delete<any>(this.url+'/'+id)
  }
}
