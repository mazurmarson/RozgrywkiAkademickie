import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css']
})
export class AddUserComponent implements OnInit {
  model:any = {};
  constructor(private authService: AuthService, public router: Router) { }
  ranks: string[] = ["student", "admin"];
  ngOnInit() {
  }

  register()
  {
    this.authService.register(this.model).subscribe( next => {
      console.log('Stworzono użytkownika');
      this.router.navigate(['/usersManage']);
    }, error => {
      console.log(error);
    });
  }

}
