import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportsService } from 'src/app/_services/sports.service';

@Component({
  selector: 'app-addSport',
  templateUrl: './addSport.component.html',
  styleUrls: ['./addSport.component.css']
})
export class AddSportComponent implements OnInit {
model:any = {};
  constructor(private sportService: SportsService, public router: Router) { }

  ngOnInit() {
  }

  addSport()
  {
    this.sportService.addSport(this.model).subscribe( next => {
      console.log('Dodano sport');
      this.router.navigate(['/sports']);
    }, error => {
      console.log(error);
    });
  }

}
