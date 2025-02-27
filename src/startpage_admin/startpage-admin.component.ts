import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../app/services/user.service';

@Component({
  selector: 'app-startpage-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './startpage-admin.component.html',
  styleUrls: ['../styles.css']
})
export class StartpageAdminComponent {
  users: { name: string; roles: string[] }[] = [];

  constructor(private userService: UserService) {  
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userService.getUsers().sort((a, b) => a.roles.length - b.roles.length);
  }

  getRoleColor(role: string): string {
    return this.userService.getRoleColor(role);
  }
}





