import { Component, OnInit } from '@angular/core';
import { SportsService } from 'src/app/_services/sports.service';

@Component({
  selector: 'app-selectSport',
  templateUrl: './selectSport.component.html',
  styleUrls: ['./selectSport.component.css']
})
export class SelectSportComponent implements OnInit {
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


}
