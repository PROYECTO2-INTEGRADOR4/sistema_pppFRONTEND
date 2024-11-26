import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, PasswordModule, InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
      if (this.username && this.password) {
        this.authService.login(this.username, this.password).subscribe({
          next: (response) => {
            console.log('Login successful', response);
            localStorage.setItem('token', response.accessToken); 
            localStorage.setItem('roles', JSON.stringify(response.roles));
            localStorage.setItem('carrera', response.carrera);
            this.router.navigate(['/perfil']);
          },
          error: (error) => {
            console.error('Login failed', error);
          },
        });
      } else {
        console.error('Por favor, ingresa usuario y contraseña');
      }
  }
}