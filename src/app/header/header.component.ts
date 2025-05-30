import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { Avatar } from 'primeng/avatar';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    NavbarComponent,
    Avatar
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  alias = 'AR';
  username = 'Arthur';
  taskCount = 12;
  searchQuery = '';

  get greeting(): string {
    return `Hi ${this.username}, welcome! You have ${this.taskCount} open tasks.`;
  }
}
