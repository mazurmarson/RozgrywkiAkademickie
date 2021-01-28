import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldOfStudyService } from 'src/app/_services/fieldOfStudy.service';

@Component({
  selector: 'app-EditField',
  templateUrl: './EditField.component.html',
  styleUrls: ['./EditField.component.css']
})
export class EditFieldComponent implements OnInit {
  id:number;
  model:any = {};
  isLoaded = false;
  constructor(private route: ActivatedRoute, private fieldService:FieldOfStudyService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
   }

  ngOnInit() {
    this.getField();
  }

  getField()
  {
    this.fieldService.getField(this.id).subscribe( (response) => {
      this.model = response;
      this.isLoaded = true;
    });
  }

  editField()
  {
    this.fieldService.editField(this.model).subscribe( () => {
      console.log('Edycja zakończona sukcesem');
    }, error => {
      console.log(error);
    })
  }


}
