import { Component } from '@angular/core';
import { User } from '@data/interfaces/api.user';
import { UserService } from '@data/services/user.service';

@Component({
  selector: 'mmj-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public users : User[] = []

  constructor(private userService : UserService) {
    this.loadUsers();
  }

  public loadUsers() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        if (response.ok) {
          this.users = response.data
        }
      },
      error: (e) => console.error(e),
    })
  }

}
