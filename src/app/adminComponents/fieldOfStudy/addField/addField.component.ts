import { Component, OnInit } from '@angular/core';
import { FieldOfStudyService } from 'src/app/_services/fieldOfStudy.service';

@Component({
  selector: 'app-addField',
  templateUrl: './addField.component.html',
  styleUrls: ['./addField.component.css']
})
export class AddFieldComponent implements OnInit {
  model:any = {};
  constructor(private fieldService: FieldOfStudyService) { }

  ngOnInit() {
  }

  addField()
  {
    this.fieldService.addField(this.model).subscribe( next => {
      console.log('Dodano kierunek');
    }, error => {
      console.log(error);
    });
  }

}
