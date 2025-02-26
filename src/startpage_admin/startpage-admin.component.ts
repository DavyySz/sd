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
  users: { name: string; roles: string[] }[] = [];  // Hier speichern wir die Benutzerliste

  constructor(private userService: UserService) {  
    this.users = this.userService.getUsers();  // 🔹 Lade Benutzer aus dem Service
  }

  // 🔹 Funktion, um die Farbe der Rolle zu erhalten
  getRoleColor(role: string): string {
    const roleColors: { [key: string]: string } = {
      'Mitglied': '#007bff',
      'Admin': '#28a745',
      'Gast': '#6c757d'
    };
    return roleColors[role] || '#6c757d';  // Falls keine Farbe definiert ist, Standardfarbe nutzen
  }
}

