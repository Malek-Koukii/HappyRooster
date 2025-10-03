import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  public url: any;
  public homeLabel: string = 'Home';
  public aboutLabel: string = 'About';
  public menuLabel: string = 'Menu';
  public specialsLabel: string = 'our specialty';
  public contactLabel: string = 'Contact Us';
  public loginLabel: string = 'Login';
  public logoutLabel: string = 'Logout';
  public englishLabelDropdown: string = 'English';
  public englishLabel: string = 'English';
  public frenchLabel: string = 'French';

  constructor(
    private translationService: TranslationService,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngAfterViewInit() {
    this.translationService.currentLang$.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    const lang = this.translationService.getCurrentLanguage();

    if (lang === 'en') {
      this.homeLabel = 'Home';
      this.aboutLabel = 'About';
      this.menuLabel = 'Menu';
      this.specialsLabel = 'Our Specialty';
      this.contactLabel = 'Contact Us';
      this.loginLabel = 'Login';
      this.logoutLabel = 'Logout';
      this.englishLabelDropdown = 'English';
      this.englishLabel = 'English';
      this.frenchLabel = 'French';
      this.renderer.addClass(this.el.nativeElement.querySelector('#enOption'), 'd-none');
      this.renderer.removeClass(this.el.nativeElement.querySelector('#frOption'), 'd-none');
      (this.el.nativeElement.querySelector('#englishFlag') as HTMLImageElement).src =
        'assets/imgs/english.png';
    } else {
      this.homeLabel = 'Accueil';
      this.aboutLabel = 'À propos';
      this.menuLabel = 'Menu';
      this.specialsLabel = 'Notre spécialité';
      this.contactLabel = 'Contactez-nous';
      this.loginLabel = 'Connexion';
      this.logoutLabel = 'Déconnexion';
      this.englishLabelDropdown = 'Français';
      this.englishLabel = 'Anglais';
      this.frenchLabel = 'Français';
      this.renderer.removeClass(this.el.nativeElement.querySelector('#enOption'), 'd-none');
      this.renderer.addClass(this.el.nativeElement.querySelector('#frOption'), 'd-none');
      (this.el.nativeElement.querySelector('#englishFlag') as HTMLImageElement).src =
        'assets/imgs/french.png';
    }
  }

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }
}
