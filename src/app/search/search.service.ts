import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  GetAllUsers(UserName:String){
    const SearchObject = Object.assign({}, {UserName});
    return this.http.post(`${environment.apiUrl}/user/searchUser`, SearchObject);
  
  }
}
