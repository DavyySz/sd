import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { name: string; roles: string[] }[] = [];
  private roles: { name: string; color: string }[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.loadFromStorage(); // 🔥 Direkt beim Start Daten laden
  }

  // 🔹 Benutzer speichern
  setUsers(users: { name: string; roles: string[] }[]) {
    console.log('✅ Speichere Benutzer:', users);
    this.users = [...users];

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  // 🔹 Benutzer abrufen
  getUsers() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadFromStorage(); // 🔥 Stelle sicher, dass Daten geladen werden
    }
    console.log('📥 Geladene Benutzer:', this.users);
    return this.users;
  }

  // 🔹 **Rollen speichern** (✅ FEHLTE ZUVOR!)
  setRoles(roles: { name: string; color: string }[]) {
    console.log('🎨 Speichere Rollen:', roles);
    this.roles = [...roles];

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('roles', JSON.stringify(this.roles)); // ✅ Speichert Rollen mit Farben
    }
  }

  // 🔹 **Gespeicherte Rollen abrufen** (✅ FEHLTE ZUVOR!)
  getRoles() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadFromStorage(); // 🔥 Stelle sicher, dass Daten geladen werden
    }
    console.log('📥 Geladene Rollen:', this.roles);
    return this.roles;
  }

  // 🔹 **Farbe einer Rolle abrufen** (✅ FEHLTE ZUVOR!)
  getRoleColor(role: string): string {
    const foundRole = this.roles.find(r => r.name === role);
    return foundRole ? foundRole.color : '#6c757d'; // ✅ Standardfarbe für unbekannte Rollen
  }

  // 🔹 Speicher aus `localStorage` laden (wenn im Browser)
  private loadFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const storedUsers = localStorage.getItem('users');
      this.users = storedUsers ? JSON.parse(storedUsers) : [];

      const storedRoles = localStorage.getItem('roles'); // ✅ Rollen mit Farben laden
      this.roles = storedRoles ? JSON.parse(storedRoles) : [];
    }
  }
}





