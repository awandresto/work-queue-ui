import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
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
