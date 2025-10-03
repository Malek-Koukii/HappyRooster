import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  public englishLabelDropdown: string = 'English';
  public englishLabel: string = 'English';
  public frenchLabel: string = 'French';

  constructor(
    private translationService: TranslationService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  
  ngAfterViewInit() {
    this.translationService.currentLang$.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    const lang = this.translationService.getCurrentLanguage();
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const subjectInput = document.getElementById('subject') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLInputElement;

    if (lang === 'en') {
      // Traduction English
      this.englishLabelDropdown = 'English';
      this.englishLabel = 'English';
      this.frenchLabel = 'French';
      this.renderer.addClass(this.el.nativeElement.querySelector('#enOption'), 'd-none');
      this.renderer.removeClass(this.el.nativeElement.querySelector('#frOption'), 'd-none');
      (this.el.nativeElement.querySelector('#englishFlag') as HTMLImageElement).src =
        'assets/imgs/english.png';

      document.getElementById('contactTab')!.textContent = 'Contact Us';
      document.getElementById('submit')!.textContent = 'Send Message';
      document.getElementById('addressContact')!.textContent = 'Address';
      document.getElementById('emailContact')!.textContent = 'Email';
      document.getElementById('phone')!.textContent = 'Phone';
      document.getElementById('socialMedia')!.textContent =
          'Follow us on social media';
      nameInput.placeholder = 'Name & Surname';
      emailInput.placeholder = 'Email';
      subjectInput.placeholder = 'Subject';
      messageInput.placeholder = 'Message';
    } else {
      // Traduction French
      this.englishLabelDropdown = 'Français';
      this.englishLabel = 'Anglais';
      this.frenchLabel = 'Français';
      this.renderer.removeClass(this.el.nativeElement.querySelector('#enOption'), 'd-none');
      this.renderer.addClass(this.el.nativeElement.querySelector('#frOption'), 'd-none');
      (this.el.nativeElement.querySelector('#englishFlag') as HTMLImageElement).src =
        'assets/imgs/french.png';

      document.getElementById('contactTab')!.textContent = 'Contactez-nous';
      document.getElementById('submit')!.textContent = 'Envoyer un message';
      document.getElementById('addressContact')!.textContent = 'Adresse';
      document.getElementById('emailContact')!.textContent = 'E-mail';
      document.getElementById('phone')!.textContent = 'Téléphone';
      document.getElementById('socialMedia')!.textContent =
        'Suivez-nous sur les réseaux sociaux';
      nameInput.placeholder = 'Nom & Prénom';
      emailInput.placeholder = 'E-mail';
      subjectInput.placeholder = 'Sujet';
      messageInput.placeholder = 'Message';
    }
  }

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }
}
