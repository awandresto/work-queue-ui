import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { Avatar } from 'primeng/avatar';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BreadcrumbsService } from '../shared/services/breadcrumbs.service';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    NavbarComponent,
    Avatar,
    BreadcrumbsComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  @Input() alias = 'AR';
  @Input() username = 'Arthur';
  @Input() taskCount = 12;
  @Input() searchQuery = '';

  constructor(public breadcrumbsService: BreadcrumbsService) {}

  get greeting(): string {
    return `Hi ${this.username}, welcome! You have ${this.taskCount} open tasks`;
  }
}
