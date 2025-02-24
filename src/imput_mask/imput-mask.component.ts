import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imput-mask',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './imput-mask.component.html',
  styleUrls: ['../styles.css']
})
export class ImputMaskComponent {
  // Eingabefelder für Benutzer
  newUserName: string = '';
  newUserRoles: string[] = [];  // Mehrfachauswahl für Rollen
  newRoleName: string = '';
  newRoleColor: string = '#000000';  

  // Liste der Benutzer
  users: any[] = [];

  // Liste der Rollen
  roles: any[] = [
    { name: 'Mitglied', color: '#007bff' },
    { name: 'Admin', color: '#28a745' },
    { name: 'Gast', color: '#6c757d' }
  ];

  // Benutzer hinzufügen (mit mehreren Rollen)
  addUser() {
    if (this.newUserName.trim() !== '' && this.newUserRoles.length > 0) {
      this.users.push({
        name: this.newUserName.trim(),
        roles: [...this.newUserRoles] // Kopiere die ausgewählten Rollen
      });

      // Eingabefelder zurücksetzen
      this.newUserName = '';
      this.newUserRoles = [];
    }
  }

  // Benutzer löschen
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  // Alle Benutzer löschen
  deleteAllUsers() {
    this.users = [];
  }

  // Eigene Rolle erstellen
  addRole() {
    if (this.newRoleName.trim() !== '' && this.newRoleColor) {
      this.roles.push({
        name: this.newRoleName.trim(),
        color: this.newRoleColor
      });

      // Eingabefelder zurücksetzen
      this.newRoleName = '';
      this.newRoleColor = '#000000';  
    }
  }

  // Farbe für eine Rolle abrufen
  getRoleColor(role: string): string {
    const foundRole = this.roles.find(r => r.name === role);
    return foundRole ? foundRole.color : '#6c757d'; 
  }

  // Rollen für Benutzer in der Checkbox-Liste toggeln
  toggleUserRole(role: string, event: any) {
    if (event.target.checked) {
      this.newUserRoles.push(role);
    } else {
      this.newUserRoles = this.newUserRoles.filter(r => r !== role);
    }
  }
}

