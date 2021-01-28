import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultsService } from 'src/app/_services/results.service';

@Component({
  selector: 'app-addResult',
  templateUrl: './addResult.component.html',
  styleUrls: ['./addResult.component.css']
})
export class AddResultComponent implements OnInit {
  id:number;
  id2:number;
  model:any = {};
  constructor(private route: ActivatedRoute, private resultService: ResultsService, public router: Router) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.id2 = params['id2'];

    });
  }

  ngOnInit() {
    
  }

  addResult()
  {
    this.model.competitionId = Number(this.id);
    this.model.fieldOfStudyId = Number(this.id2);
    console.log(this.model);
    this.resultService.addResult(this.model).subscribe( next => {
      console.log('Dodano rezultat');
      this.router.navigate(['/competitionResults/',this.id]);
    }, error => {
      console.log(error);
    });
  }

}
