import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <div class="card">
        <h2>Welcome to Symphony WebApp!</h2>
        <p>This is a simple Angular application boilerplate.</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      font-family: Arial, sans-serif;
    }
    
    h1 {
      color: #333;
      margin-bottom: 1rem;
    }
    
    .card {
      background: #f5f5f5;
      border-radius: 8px;
      padding: 2rem;
      margin-top: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    h2 {
      color: #666;
      margin-bottom: 1rem;
    }
  `]
})
export class AppComponent {
  title = 'Symphony WebApp';
  message = 'Hello World from Angular!';
} 