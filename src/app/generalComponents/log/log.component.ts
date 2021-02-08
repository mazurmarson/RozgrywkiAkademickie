import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  model: any = {};
  role: string;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login()
  {
    this.authService.login(this.model).subscribe(next => {
      console.log('Zalogowałeś się do aplikacji')
      
    }, error => {
      console.log('Błąd logowania');
    }, () => {
      this.router.navigate(['']);
    }
    );
  }

}
