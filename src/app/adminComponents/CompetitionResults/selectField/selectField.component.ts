import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldOfStudyService } from 'src/app/_services/fieldOfStudy.service';

@Component({
  selector: 'app-selectField',
  templateUrl: './selectField.component.html',
  styleUrls: ['./selectField.component.css']
})
export class SelectFieldComponent implements OnInit {
  fields: any = [];
  id:number;
  constructor(private fieldOfStudyService: FieldOfStudyService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

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

}
