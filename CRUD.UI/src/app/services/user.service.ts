import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "User";
  
  constructor(private http: HttpClient) { }

  public getUser() : Observable<user[]>{
    return this.http.get<user[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateUser(thisUser: user) : Observable<user[]>{
    return this.http.put<user[]>(`${environment.apiUrl}/${this.url}`, thisUser);
  }

  public createUser(thisUser: user) : Observable<user[]>{
    return this.http.post<user[]>(`${environment.apiUrl}/${this.url}`, thisUser);
  }

  public deleteUser(thisUser: user) : Observable<user[]>{
    return this.http.delete<user[]>(`${environment.apiUrl}/${this.url}/${thisUser.id}`);
  }
  
}
