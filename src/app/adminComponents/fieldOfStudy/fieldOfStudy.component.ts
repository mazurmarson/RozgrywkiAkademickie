import { Component, OnInit } from '@angular/core';
import { FieldOfStudyService } from 'src/app/_services/fieldOfStudy.service';

@Component({
  selector: 'app-fieldOfStudy',
  templateUrl: './fieldOfStudy.component.html',
  styleUrls: ['./fieldOfStudy.component.css']
})
export class FieldOfStudyComponent implements OnInit {

  constructor(private fieldOfStudyService: FieldOfStudyService) { }
  fields: any = [];
  ngOnInit() {
    this.getFields();
  }

  getFields()
  {
    this.fieldOfStudyService.getFields().subscribe( (response: any) => {
      this.fields = response;
      console.log(this.fields);
    }, error => {
      console.log('Nie udało sie pobrać kierunków');
    });
  }

  deleteField(id:number)
  {
    this.fieldOfStudyService.deleteField(id).subscribe( response => {
      console.log('Usunięto kierunek');
      this.getFields();
    }, error => {
      console.log('Wystąpił błąd, nie można usunąć kierunku');
    });
  }

}
