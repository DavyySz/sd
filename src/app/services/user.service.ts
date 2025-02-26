import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // ✅ Service global verfügbar machen
})
export class UserService {
  private users: { name: string; roles: string[] }[] = [];

  setUsers(users: { name: string; roles: string[] }[]) {
    this.users = users;
  }

  getUsers() {
    return this.users;
  }
}
