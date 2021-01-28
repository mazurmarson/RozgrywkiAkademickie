import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionsService } from 'src/app/_services/competitions.service';

@Component({
  selector: 'app-addCompetition',
  templateUrl: './addCompetition.component.html',
  styleUrls: ['./addCompetition.component.css']
})
export class AddCompetitionComponent implements OnInit {

  constructor(private competitionService: CompetitionsService, private route: ActivatedRoute) { }
  model:any ={};
  id:number;
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      //this.model.date = '0001-01-01T00:00:00';
      
      this.model.photoUrl = 'brak zdjęcia';
      this.id = params['id'];
    });
  }

  addCompetition()
  {
    console.log(this.model);
    this.competitionService.addCompetition(this.id ,this.model).subscribe( next => {
      console.log('Dodano zawody');
      
    }, error => {
      console.log(error);
    });
  }

}
