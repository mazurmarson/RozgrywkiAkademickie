import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionsService } from 'src/app/_services/competitions.service';
import { SportsService } from 'src/app/_services/sports.service';

@Component({
  selector: 'app-editCompetition',
  templateUrl: './editCompetition.component.html',
  styleUrls: ['./editCompetition.component.css']
})
export class EditCompetitionComponent implements OnInit {
  model: any ={};
  id:number;
  isLoaded:boolean = false;
  constructor(private competitionService: CompetitionsService, private route: ActivatedRoute) {
    
      this.route.params.subscribe(params => {
        this.id = params['id'];
      });
  

   }

  ngOnInit() {
    this.getCompetition(this.id);
  }

  getCompetition(id:number)
  {
    this.competitionService.getCompetition(id).subscribe( (response) => {
      this.model = response;
      this.isLoaded = true;
      console.log(this.model);
    }, error => {
      console.log('Wystąpił problem');
    });
  }

  editCompetition()
  {
    this.competitionService.editCompetition(this.model).subscribe( () => {
      console.log('Edycja zakończona sukcesem');
    }, error => {
      console.log(error);
    });
  }

}
