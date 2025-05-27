import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { BehaviorSubject } from 'rxjs';

interface NavButton {
  label: string;
  icon?: SafeHtml;
  svgRaw: string;
  routerLink: string;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MenubarModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent implements AfterViewInit {
  buttons: NavButton[] = [];
  isScrollButtons$ = new BehaviorSubject(false);

  constructor(private sanitizer: DomSanitizer) {
    this.buttons = [
      {
        label: 'Dashboard',
        svgRaw: '<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M13 20V12C13 11.735 12.895 11.48 12.707 11.293C12.52 11.105 12.265 11 12 11H8C7.735 11 7.48 11.105 7.293 11.293C7.105 11.48 7 11.735 7 12V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M1 9C1 8.709 1.063 8.422 1.186 8.158C1.308 7.894 1.487 7.66 1.709 7.472L8.709 1.473C9.07 1.168 9.527 1 10 1C10.473 1 10.93 1.168 11.291 1.473L18.291 7.472C18.513 7.66 18.692 7.894 18.814 8.158C18.937 8.422 19 8.709 19 9V18C19 18.53 18.789 19.039 18.414 19.414C18.039 19.789 17.53 20 17 20H3C2.47 20 1.961 19.789 1.586 19.414C1.211 19.039 1 18.53 1 18V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>',
        routerLink: '/dashboard'
      },
      {
        label: 'Accounts',
        svgRaw: '<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M10 7C14.971 7 19 5.657 19 4C19 2.343 14.971 1 10 1C5.029 1 1 2.343 1 4C1 5.657 5.029 7 10 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M1 4V18C1 18.796 1.94799 19.559 3.63599 20.121C5.32399 20.684 7.613 21 10 21C12.387 21 14.676 20.684 16.364 20.121C18.052 19.559 19 18.796 19 18V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M1 11C1 11.796 1.94799 12.559 3.63599 13.121C5.32399 13.684 7.613 14 10 14C12.387 14 14.676 13.684 16.364 13.121C18.052 12.559 19 11.796 19 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>',
        routerLink: '/accounts'
      },
      {
        label: 'Brokers',
        svgRaw: '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M17 19C17 16.878 16.157 14.843 14.657 13.343C13.157 11.843 11.122 11 9 11C6.878 11 4.84299 11.843 3.34299 13.343C1.84299 14.843 1 16.878 1 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M9 11C11.761 11 14 8.761 14 6C14 3.239 11.761 1 9 1C6.239 1 4 3.239 4 6C4 8.761 6.239 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M21.0001 18C21.0001 14.63 19.0001 11.5 17.0001 10C17.6571 9.50702 18.1831 8.85901 18.5311 8.11401C18.8781 7.37001 19.0371 6.55101 18.9921 5.73001C18.9481 4.90901 18.7011 4.11201 18.2751 3.40901C17.8501 2.70701 17.257 2.11901 16.55 1.70001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>',
        routerLink: '/brokers'
      },
      {
        label: 'Submissions',
        svgRaw: '<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M7 17L10 14L7 11M11 1V5C11 5.53 11.211 6.039 11.586 6.414C11.961 6.789 12.47 7 13 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M1 10V3C1 2.47 1.211 1.961 1.586 1.586C1.961 1.211 2.47 1 3 1H12L17 6V19C17 19.53 16.789 20.039 16.414 20.414C16.039 20.789 15.53 21 15 21H3C2.47 21 1.961 20.789 1.586 20.414C1.211 20.039 1 19.53 1 19V16C1 15.47 1.211 14.961 1.586 14.586C1.961 14.211 2.47 14 3 14H10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>',
        routerLink: '/submissions'
      },
      {
        label: 'Organizations',
        svgRaw: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M5 21V3C5 2.47 5.211 1.961 5.586 1.586C5.961 1.211 6.47 1 7 1H15C15.53 1 16.039 1.211 16.414 1.586C16.789 1.961 17 2.47 17 3V21M5 21H17M5 21H3C2.47 21 1.961 20.789 1.586 20.414C1.211 20.039 1 19.53 1 19V13C1 12.47 1.211 11.961 1.586 11.586C1.961 11.211 2.47 11 3 11H5M17 21H19C19.53 21 20.039 20.789 20.414 20.414C20.789 20.039 21 19.53 21 19V10C21 9.47 20.789 8.961 20.414 8.586C20.039 8.211 19.53 8 19 8H17M9 5H13M9 9H13M9 13H13M9 17H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>',
        routerLink: '/organizations'
      },
      {
        label: 'Goals & Rules',
        svgRaw: '<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M10 12V1L18 5L10 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M18.561 9.222C19.093 10.862 19.143 12.621 18.704 14.288C18.266 15.956 17.3581 17.463 16.0881 18.629C14.8181 19.795 13.239 20.572 11.54 20.867C9.84104 21.162 8.09407 20.963 6.50507 20.293C4.91607 19.623 3.55306 18.511 2.57806 17.089C1.60206 15.667 1.05609 13.995 1.00409 12.271C0.952089 10.548 1.39706 8.845 2.28406 7.367C3.17206 5.889 4.46505 4.69601 6.01105 3.93201" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M6.00203 8.99701C5.50103 9.66401 5.17499 10.446 5.05299 11.271C4.93099 12.097 5.01804 12.939 5.30604 13.723C5.59304 14.506 6.07201 15.205 6.69801 15.755C7.32501 16.306 8.07902 16.692 8.89302 16.876C9.70702 17.061 10.553 17.039 11.356 16.813C12.159 16.586 12.893 16.163 13.49 15.58C14.088 14.998 14.53 14.275 14.776 13.478C15.023 12.681 15.066 11.835 14.902 11.017" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>',
        routerLink: '/goals'
      },
      {
        label: 'Admin',
        svgRaw: '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1.58997 17.414C1.20997 17.789 1 18.298 1 18.828V21C1 21.265 1.11004 21.52 1.29004 21.707C1.48004 21.895 1.73 22 2 22H5C5.27 22 5.51996 21.895 5.70996 21.707C5.88996 21.52 6 21.265 6 21V20C6 19.735 6.11004 19.481 6.29004 19.293C6.48004 19.106 6.73 19 7 19H8C8.27 19 8.51996 18.895 8.70996 18.707C8.88996 18.52 9 18.265 9 18V17C9 16.735 9.11004 16.481 9.29004 16.293C9.48004 16.106 9.73 16 10 16H10.17C10.7 16 11.21 15.789 11.59 15.414L12.4 14.6C13.79 15.084 15.2999 15.082 16.6899 14.595C18.0799 14.107 19.26 13.163 20.04 11.916C20.83 10.67 21.16 9.19398 21 7.73198C20.83 6.26898 20.18 4.90598 19.13 3.86598C18.09 2.82498 16.73 2.16798 15.27 2.00298C13.81 1.83798 12.33 2.17398 11.08 2.95598C9.83996 3.73798 8.89003 4.91999 8.41003 6.30899C7.92003 7.69699 7.92002 9.20999 8.40002 10.6L1.58997 17.414Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M15.5 8C15.78 8 16 7.776 16 7.5C16 7.224 15.78 7 15.5 7C15.22 7 15 7.224 15 7.5C15 7.776 15.22 8 15.5 8Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>',
        routerLink: '/admin'
      },
      {
        label: 'Admin',
        svgRaw: '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1.58997 17.414C1.20997 17.789 1 18.298 1 18.828V21C1 21.265 1.11004 21.52 1.29004 21.707C1.48004 21.895 1.73 22 2 22H5C5.27 22 5.51996 21.895 5.70996 21.707C5.88996 21.52 6 21.265 6 21V20C6 19.735 6.11004 19.481 6.29004 19.293C6.48004 19.106 6.73 19 7 19H8C8.27 19 8.51996 18.895 8.70996 18.707C8.88996 18.52 9 18.265 9 18V17C9 16.735 9.11004 16.481 9.29004 16.293C9.48004 16.106 9.73 16 10 16H10.17C10.7 16 11.21 15.789 11.59 15.414L12.4 14.6C13.79 15.084 15.2999 15.082 16.6899 14.595C18.0799 14.107 19.26 13.163 20.04 11.916C20.83 10.67 21.16 9.19398 21 7.73198C20.83 6.26898 20.18 4.90598 19.13 3.86598C18.09 2.82498 16.73 2.16798 15.27 2.00298C13.81 1.83798 12.33 2.17398 11.08 2.95598C9.83996 3.73798 8.89003 4.91999 8.41003 6.30899C7.92003 7.69699 7.92002 9.20999 8.40002 10.6L1.58997 17.414Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M15.5 8C15.78 8 16 7.776 16 7.5C16 7.224 15.78 7 15.5 7C15.22 7 15 7.224 15 7.5C15 7.776 15.22 8 15.5 8Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>',
        routerLink: '/admin'
      },
      {
        label: 'Admin',
        svgRaw: '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1.58997 17.414C1.20997 17.789 1 18.298 1 18.828V21C1 21.265 1.11004 21.52 1.29004 21.707C1.48004 21.895 1.73 22 2 22H5C5.27 22 5.51996 21.895 5.70996 21.707C5.88996 21.52 6 21.265 6 21V20C6 19.735 6.11004 19.481 6.29004 19.293C6.48004 19.106 6.73 19 7 19H8C8.27 19 8.51996 18.895 8.70996 18.707C8.88996 18.52 9 18.265 9 18V17C9 16.735 9.11004 16.481 9.29004 16.293C9.48004 16.106 9.73 16 10 16H10.17C10.7 16 11.21 15.789 11.59 15.414L12.4 14.6C13.79 15.084 15.2999 15.082 16.6899 14.595C18.0799 14.107 19.26 13.163 20.04 11.916C20.83 10.67 21.16 9.19398 21 7.73198C20.83 6.26898 20.18 4.90598 19.13 3.86598C18.09 2.82498 16.73 2.16798 15.27 2.00298C13.81 1.83798 12.33 2.17398 11.08 2.95598C9.83996 3.73798 8.89003 4.91999 8.41003 6.30899C7.92003 7.69699 7.92002 9.20999 8.40002 10.6L1.58997 17.414Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M15.5 8C15.78 8 16 7.776 16 7.5C16 7.224 15.78 7 15.5 7C15.22 7 15 7.224 15 7.5C15 7.776 15.22 8 15.5 8Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>',
        routerLink: '/admin'
      },
      {
        label: 'Admin',
        svgRaw: '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1.58997 17.414C1.20997 17.789 1 18.298 1 18.828V21C1 21.265 1.11004 21.52 1.29004 21.707C1.48004 21.895 1.73 22 2 22H5C5.27 22 5.51996 21.895 5.70996 21.707C5.88996 21.52 6 21.265 6 21V20C6 19.735 6.11004 19.481 6.29004 19.293C6.48004 19.106 6.73 19 7 19H8C8.27 19 8.51996 18.895 8.70996 18.707C8.88996 18.52 9 18.265 9 18V17C9 16.735 9.11004 16.481 9.29004 16.293C9.48004 16.106 9.73 16 10 16H10.17C10.7 16 11.21 15.789 11.59 15.414L12.4 14.6C13.79 15.084 15.2999 15.082 16.6899 14.595C18.0799 14.107 19.26 13.163 20.04 11.916C20.83 10.67 21.16 9.19398 21 7.73198C20.83 6.26898 20.18 4.90598 19.13 3.86598C18.09 2.82498 16.73 2.16798 15.27 2.00298C13.81 1.83798 12.33 2.17398 11.08 2.95598C9.83996 3.73798 8.89003 4.91999 8.41003 6.30899C7.92003 7.69699 7.92002 9.20999 8.40002 10.6L1.58997 17.414Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M15.5 8C15.78 8 16 7.776 16 7.5C16 7.224 15.78 7 15.5 7C15.22 7 15 7.224 15 7.5C15 7.776 15.22 8 15.5 8Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>',
        routerLink: '/admin'
      },
      {
        label: 'Admin',
        svgRaw: '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1.58997 17.414C1.20997 17.789 1 18.298 1 18.828V21C1 21.265 1.11004 21.52 1.29004 21.707C1.48004 21.895 1.73 22 2 22H5C5.27 22 5.51996 21.895 5.70996 21.707C5.88996 21.52 6 21.265 6 21V20C6 19.735 6.11004 19.481 6.29004 19.293C6.48004 19.106 6.73 19 7 19H8C8.27 19 8.51996 18.895 8.70996 18.707C8.88996 18.52 9 18.265 9 18V17C9 16.735 9.11004 16.481 9.29004 16.293C9.48004 16.106 9.73 16 10 16H10.17C10.7 16 11.21 15.789 11.59 15.414L12.4 14.6C13.79 15.084 15.2999 15.082 16.6899 14.595C18.0799 14.107 19.26 13.163 20.04 11.916C20.83 10.67 21.16 9.19398 21 7.73198C20.83 6.26898 20.18 4.90598 19.13 3.86598C18.09 2.82498 16.73 2.16798 15.27 2.00298C13.81 1.83798 12.33 2.17398 11.08 2.95598C9.83996 3.73798 8.89003 4.91999 8.41003 6.30899C7.92003 7.69699 7.92002 9.20999 8.40002 10.6L1.58997 17.414Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '<path d="M15.5 8C15.78 8 16 7.776 16 7.5C16 7.224 15.78 7 15.5 7C15.22 7 15 7.224 15 7.5C15 7.776 15.22 8 15.5 8Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg>',
        routerLink: '/admin'
      }
    ];

    this.buttons.forEach(btn => btn.icon = this.sanitizer.bypassSecurityTrustHtml(btn.svgRaw));
  }

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;

  @HostListener('window:resize') onResize(): void {
    this.isScrollButtons$.next(this.toShowScrollButtons);
  }

  get toShowScrollButtons(): boolean {
    return this.scrollContainer.nativeElement.offsetWidth < this.scrollContainer.nativeElement.scrollWidth;
  }

  get toDisableLeftScroll(): boolean {
    return !this.scrollContainer.nativeElement.scrollLeft;
  }

  get toDisableRightScroll(): boolean {
    return (this.scrollContainer.nativeElement.scrollWidth - this.scrollContainer.nativeElement.offsetWidth) ===
      this.scrollContainer.nativeElement.scrollLeft;
  }

  ngAfterViewInit() {
    setTimeout(() => this.isScrollButtons$.next(this.toShowScrollButtons));
  }

  scrollLeft() {
    this.toScroll(true);
  }

  scrollRight() {
    this.toScroll();
  }

  private toScroll(isLeft?: boolean) {
    this.scrollContainer.nativeElement.scrollBy({ left: isLeft ? -100 : 100, behavior: 'smooth' });
  }
}
