import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollTop();
  }

  checkScrollTop() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Display the button when the user scrolls down, hide it when at the top
    const button = document.querySelector('.back-to-top');
    if (button) {
      if (scrollPosition > 300) {
        button.classList.add('block');
      } else {
        button.classList.remove('block');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
