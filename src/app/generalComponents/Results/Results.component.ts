import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/_services/results.service';

@Component({
  selector: 'app-Results',
  templateUrl: './Results.component.html',
  styleUrls: ['./Results.component.css']
})
export class ResultsComponent implements OnInit {

  results:any = [];
  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.resultsService.getSeasonResult().subscribe( (response: any) =>{
      this.results = response;
      console.log(this.results);
    }, error => {
      console.log('Wystąpił błąd');
    });
  }

}
