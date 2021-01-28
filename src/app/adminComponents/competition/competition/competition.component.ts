import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from 'src/app/_services/competitions.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competitions:any = [];
  constructor(private competitionService: CompetitionsService) { }

  ngOnInit() {
    this.getCompetitions();
  }

  getCompetitions()
  {
    this.competitionService.getCompetitions().subscribe( (response:any) => {
      this.competitions = response;
      console.log(this.competitions);
    }, error => {
      console.log('Nie udało sie pobrać zawodów');
    } );
  }

  deleteCompetitions(id:number)
  {
    this.competitionService.deleteCompetition(id).subscribe( response => {
      console.log('Usunięto zawody');
      this.getCompetitions();
    }, error => {
      console.log('Wystąpił błąd, nie można usunąć zawodoów')
    })
  }

}
