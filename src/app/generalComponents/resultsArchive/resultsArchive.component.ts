import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/_services/results.service';

@Component({
  selector: 'app-resultsArchive',
  templateUrl: './resultsArchive.component.html',
  styleUrls: ['./resultsArchive.component.css']
})
export class ResultsArchiveComponent implements OnInit {

  results:any = [];
  year:number = 1;
  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.getResults();
  }


  getResults()
  {
    this.resultsService.getSeasonResultArchive(this.year).subscribe( (response: any) =>{
      this.results = response;
      console.log(this.results);
    }, error => {
      console.log('Wystąpił błąd');
    });
  }

}
