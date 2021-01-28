import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionsService } from 'src/app/_services/competitions.service';
import { ResultsService } from 'src/app/_services/results.service';

@Component({
  selector: 'app-CompetitionResults',
  templateUrl: './CompetitionResults.component.html',
  styleUrls: ['./CompetitionResults.component.css']
})
export class CompetitionResultsComponent implements OnInit {
id:number;
competitionResults:any=[];
  constructor(private route: ActivatedRoute, private competitionsService: CompetitionsService, private resultsService: ResultsService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
   }

  ngOnInit() {
    this.getCompetitionsResults();
  }

  getCompetitionsResults()
  {
    this.competitionsService.getCompetitionResults(this.id).subscribe( (response: any) => {
      this.competitionResults = response;
      console.log(this.competitionResults);
    }, error => {
      console.log('Nie udane pobieranie rezultatów');
    });
  }

  deleteCompetitionResult(id:number)
  {
    this.resultsService.deleteResult(id).subscribe( () => {
      console.log('Usunięto wynik');
      this.getCompetitionsResults();
    }, error => {
      console.log(error);
    } );
    
  }

}
