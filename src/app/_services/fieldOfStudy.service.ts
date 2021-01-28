import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldOfStudyService {
  baseUrl:string = 'http://localhost:5000/api/';
constructor(private http: HttpClient) { }


getField(id:number)
{
  return this.http.get(this.baseUrl + 'fieldsOfStudy/'+id);
}

getFields()
{
  return this.http.get(this.baseUrl + 'fieldsOfStudy');
}

addField(model:any)
{
  return this.http.post(this.baseUrl + 'fieldsOfStudy', model);
}

editField(model:any)
{
  return this.http.put(this.baseUrl + 'fieldsOfStudy/',model);
}

deleteField(id:number)
{
  return this.http.delete(this.baseUrl + 'fieldsOfStudy/'+id);
}

}
