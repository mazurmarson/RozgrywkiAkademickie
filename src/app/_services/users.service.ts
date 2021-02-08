import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'http://localhost:5000/api/users';
constructor(private http: HttpClient) { }


getUsers()
{
  return this.http.get(this.baseUrl);
}

getUser(id:number)
{
  return this.http.get(this.baseUrl+ '/'+id);
}

deleteUser(id:number)
{
  return this.http.delete(this.baseUrl + '/'+id);
}

}
