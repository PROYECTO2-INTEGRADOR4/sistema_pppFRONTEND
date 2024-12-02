import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean>  | Promise<boolean> | boolean {

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false; 
    }
    return true;
  }  
}