import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  baseUrl = 'http://localhost:5000/api/'

constructor(private http: HttpClient) {
  
 }

getSports()
{
    return this.http.get(this.baseUrl + 'sports');
}

getSport(id:number)
{
  return this.http.get(this.baseUrl + 'sports/'+id);
}

deleteSport(id:number)
{
  return this.http.delete(this.baseUrl + 'sports/'+id);
}

editSport(model:any)
{
  return this.http.put(this.baseUrl + 'sports/', model);
}

addSport(model:any)
{
  return this.http.post(this.baseUrl + 'sports/',model );
}


}
