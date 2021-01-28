import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsService } from 'src/app/_services/sports.service';

@Component({
  selector: 'app-editSport',
  templateUrl: './editSport.component.html',
  styleUrls: ['./editSport.component.css']
})
export class EditSportComponent implements OnInit {
  model:any = {};
  id:number;
  isLoaded:boolean = false;
  constructor(private sportService: SportsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
   }

  ngOnInit() {
    this.getSport(this.id);
  }

  getSport(id:number)
  {
    this.sportService.getSport(id).subscribe( (response) => {
      this.model = response;
      this.isLoaded = true;
      console.log(this.model);
    } );
  }

  editSport()
  {
    this.sportService.editSport(this.model).subscribe( () => {
      console.log('Edycja zakończona sukcesem');
    }, error => {
      console.log(error);
    });
  }

}
