import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // Access the email form control
    const emailControl = document.querySelector('input[formControlName="email"]');

    // Check if the email control is invalid
    if (emailControl) {
      // Navigate away and return false to prevent access
      this.router.navigate(['/']);
      return false;
    }

    // Allow access if email is valid
    return true;
  }
}
