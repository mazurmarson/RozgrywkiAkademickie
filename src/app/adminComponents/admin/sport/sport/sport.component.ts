import { Component, OnInit } from '@angular/core';
import { SportsService } from 'src/app/_services/sports.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  sports: any = [];
  constructor(private sportService: SportsService) { }

  ngOnInit() {
  this.getSports();
  }


  getSports()
  {
    this.sportService.getSports().subscribe( ( response: any ) => {
      this.sports = response;
      console.log(this.sports);
    }, error => {
      console.log('Nie udało się pobrać sportów');
    });
  }

  deleteSport(id:number)
  {
    this.sportService.deleteSport(id).subscribe( response => {
      console.log('Usunięto sport');
      this.getSports();
    }, error => {
      console.log('Wystąpił błąd, nie można usunąć sportu');
    });

    
  }

}
