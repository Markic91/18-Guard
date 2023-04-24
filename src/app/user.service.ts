import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private role: string = 'ANONYMOUS';

  roleReturn() {
    return this.role;
  }

  constructor() {}
}
