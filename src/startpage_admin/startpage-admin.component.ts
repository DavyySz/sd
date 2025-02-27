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
  roles: { name: string; color: string }[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
    this.roles = this.userService.getRoles();
  }

  getRoleColor(role: string): string {
    return this.userService.getRoleColor(role);
  }
}


