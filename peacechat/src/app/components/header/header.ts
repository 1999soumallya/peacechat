import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html'
})
export class Header {
  dropdownOpen = false;

  constructor(private elementRef: ElementRef) { }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(e: Event) {
    if (!this.elementRef.nativeElement.contains(e.target)) {
      this.dropdownOpen = false;
    }
  }
}
