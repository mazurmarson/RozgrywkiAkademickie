import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  baseUrl:string = 'http://localhost:5000/api/';
constructor(private http: HttpClient) { }

getCompetition(id:number)
{
  return this.http.get(this.baseUrl + 'competitions/'+id);
}

getCompetitions()
{
  return this.http.get(this.baseUrl + 'competitions');
}

addCompetition(id:number,model:any)
{
  console.log(model);
  return this.http.post(this.baseUrl + 'competitions/'+id, model);
  
}

editCompetition(model:any)
{
  return this.http.put(this.baseUrl + 'competitions' ,model);
}

deleteCompetition(id:number)
{
  return this.http.delete(this.baseUrl + 'competitions/'+id);
}

getCompetitionResults(id:number)
{
  return this.http.get(this.baseUrl + 'competitions/results/'+id);
}

}
