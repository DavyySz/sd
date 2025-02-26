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
  constructor(private router: Router, private userService: UserService) {}  

  newUserName: string = '';
  newUserRoles: string[] = [];  
  newRoleName: string = '';
  newRoleColor: string = '#000000';  
  users: { name: string; roles: string[] }[] = [];
  roles: { name: string; color: string }[] = [];

  ngOnInit() {
    this.roles = this.userService.getRoles(); // ✅ Lade gespeicherte Rollen
    this.users = this.userService.getUsers(); // ✅ Lade gespeicherte Benutzer
  }

  // 🔹 Benutzer hinzufügen
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

  // 🔹 Benutzer löschen
  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.userService.setUsers(this.users); // ✅ Benutzer aktualisieren
  }

  // 🔹 Neue Rolle erstellen
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

  // 🔹 Rolle löschen
  deleteRole(index: number) {
    const roleToDelete = this.roles[index].name;
    this.roles.splice(index, 1);
    this.users.forEach(user => {
      user.roles = user.roles.filter(role => role !== roleToDelete);
    });
    this.newUserRoles = this.newUserRoles.filter(role => role !== roleToDelete);
    this.userService.setRoles(this.roles); // ✅ Rollen speichern
  }

  // 🔹 Methode zum Rollen-Togglen
  toggleUserRole(role: string, event: any) {
    if (event.target.checked) {
      this.newUserRoles.push(role);
    } else {
      this.newUserRoles = this.newUserRoles.filter(r => r !== role);
    }
  }

  // 🔹 Farbe einer Rolle abrufen
  getRoleColor(role: string): string {
    return this.userService.getRoleColor(role); // ✅ Holt gespeicherte Farben
  }

  // 🔹 Benutzer speichern und zur Startseite weiterleiten
  goToNextPage() {
    console.log('🚀 Weiterleitung - Benutzerliste:', this.users);
    this.userService.setUsers(this.users); 
    this.router.navigate(['/startpage-admin']);
  }

  // 🔹 **Alle Benutzer löschen**
  deleteAllUsers() {
    this.users = [];  // Setzt die Benutzerliste auf leer
    this.userService.setUsers([]); // ✅ Leere Benutzerliste speichern
  }
}







