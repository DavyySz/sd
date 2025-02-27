import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { name: string; roles: string[] }[] = [];
  private roles: { name: string; color: string }[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.loadFromStorage(); // Lade Daten aus localStorage
  }

  setUsers(users: { name: string; roles: string[] }[]) {
    this.users = Array.isArray(users) ? [...users] : []; // ✅ Sicherstellen, dass es ein Array ist
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  

  getUsers() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadFromStorage();
    }
    return [...this.users]; // Gib eine Kopie zurück
  }

  setRoles(roles: { name: string; color: string }[]) {
    this.roles = Array.isArray(roles) ? [...roles] : [];
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('roles', JSON.stringify(this.roles));
    }
  }

  getRoles() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadFromStorage();
    }
    return [...this.roles]; // Kopie zurückgeben
  }

  getRoleColor(role: string): string {
    const foundRole = this.roles.find(r => r.name === role);
    return foundRole ? foundRole.color : '#6c757d'; // Standardfarbe falls nicht gefunden
  }

  private loadFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      this.users = JSON.parse(localStorage.getItem('users') || '[]');
      this.roles = JSON.parse(localStorage.getItem('roles') || '[]');
    }
  }
}











