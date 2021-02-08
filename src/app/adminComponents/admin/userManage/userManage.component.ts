import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-userManage',
  templateUrl: './userManage.component.html',
  styleUrls: ['./userManage.component.css']
})
export class UserManageComponent implements OnInit {
  users:any = [];
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers()
  {
    this.userService.getUsers().subscribe( ( response: any ) =>  {
      this.users = response;
      console.log(this.users);
    }, error => {
      console.log('Nie udało się pobrać użytkowników')
    });
  }

  deleteUser(id:number)
  {
    this.userService.deleteUser(id).subscribe( response => {
      console.log('Usunięto uzytkownika');
      this.loadUsers();
    }, error => {
      console.log('Wystąpił błąd nie można usunąć użytkownika')
    })
    
  }

}
