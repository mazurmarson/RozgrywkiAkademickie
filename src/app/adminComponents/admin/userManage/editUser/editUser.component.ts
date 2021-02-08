import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-editUser',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css']
})
export class EditUserComponent implements OnInit {
  model: any = {};
  id:number;
  ranks: string[] = ["student", "admin"];
  isLoaded:boolean = false;
  constructor(private userService:UsersService, private authService:AuthService, public router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.getUser();
  }

  getUser()
  {
    this.userService.getUser(this.id).subscribe( (response ) => {
      this.model = response;
      this.isLoaded = true;
      console.log(this.model);
    })
  }

  editUser()
  {
    this.authService.editUser(this.model).subscribe( () => {
      console.log('Edycja zakończona pomyślnie');
    }, error => {
      console.log(error);
    });
  }

}
