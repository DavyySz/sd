import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../app/services/user.service';

@Component({
  selector: 'app-imput-mask',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './imput-mask.component.html',
  styleUrls: ['../styles.css']
})
export class ImputMaskComponent {
  newUserName: string = '';
  newUserRoles: string[] = [];
  newRoleName: string = '';
  newRoleColor: string = '#000000';
  users: { name: string; roles: string[] }[] = [];
  roles: { name: string; color: string }[] = [];

  constructor(private router: Router, private userService: UserService) {
    this.loadUsersAndRoles(); // 🔥 Direkt beim Start laden
  }

  loadUsersAndRoles() {
    this.users = this.userService.getUsers();
    this.roles = this.userService.getRoles();
  }

  addUser() {
    if (this.newUserName.trim() !== '' && this.newUserRoles.length > 0) {
      this.users.push({
        name: this.newUserName.trim(),
        roles: [...this.newUserRoles]
      });
      this.userService.setUsers(this.users); // ✅ Benutzer speichern
      this.newUserName = '';
      this.newUserRoles = [];
    }
  }

  addRole() {
    if (this.newRoleName.trim() !== '' && this.newRoleColor) {
      this.roles.push({
        name: this.newRoleName.trim(),
        color: this.newRoleColor
      });
      this.userService.setRoles(this.roles); // ✅ Rollen speichern
      this.newRoleName = '';
      this.newRoleColor = '#000000';
    }
  }

  goToNextPage() {
    this.userService.setUsers(this.users);
    this.userService.setRoles(this.roles);
    this.router.navigate(['/startpage-admin']);
  }

  toggleUserRole(role: string, event: any) {
    if (event.target.checked) {
      this.newUserRoles.push(role);
    } else {
      this.newUserRoles = this.newUserRoles.filter(r => r !== role);
    }
  }

  deleteRole(index: number) {
    const roleToDelete = this.roles[index].name;
    this.roles.splice(index, 1);
    this.users.forEach(user => {
      user.roles = user.roles.filter(role => role !== roleToDelete);
    });
    this.newUserRoles = this.newUserRoles.filter(role => role !== roleToDelete);
    this.userService.setRoles(this.roles);
  }
  
  getRoleColor(role: string): string {
    return this.userService.getRoleColor(role);
  }
  
  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.userService.setUsers(this.users);
  }
  
  deleteAllUsers() {
    this.users = [];
    this.userService.setUsers(this.users);
  }
  
}











