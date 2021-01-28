import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  baseUrl:string = 'http://localhost:5000/api/';
constructor(private http: HttpClient) {
  
 }

 getResult(id:number)
 {
   return this.http.get(this.baseUrl + 'results/'+id);
 }

 getResults()
 {
   return this.http.get(this.baseUrl + 'results');
 }

 addResult(model:any)
 {
   return this.http.post(this.baseUrl + 'results', model);
 }

 editResult(id:number, model:any)
 {
   return this.http.put(this.baseUrl + 'results/'+id,model);
 }

 deleteResult(id:number)
 {
   return this.http.delete(this.baseUrl + 'results/'+id);
 }

 getSeasonResult()
 {
   return this.http.get(this.baseUrl + 'results/seasonResults');
 }

}
