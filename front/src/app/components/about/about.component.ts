import { Component } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private translationService: TranslationService) {}

  ngAfterViewInit() {
    this.translationService.currentLang$.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    const lang = this.translationService.getCurrentLanguage();

    if (lang === 'en') {
      // Traduction English
      document.getElementById('h1')!.textContent = 'About Us';
      document.getElementById('first-desc')!.textContent =
        'The Happy Rooster has been serving irresistible food for decades in an atmosphere of old-school refinement and quirky charm.';
      document.getElementById('second-descr')!.textContent =
        'We offer a delightful menu of lunch and dinner favorites, including Grilled Chicken Risotto and Heirloom Tomato Salad, with our most popular dish being the Chicken Wrap.';
      document.getElementById('third-descr')!.textContent =
        'Stop by for a bite after exploring the local shops, or spend an evening enjoying food and drinks in our intimate dining area or on our outdoor patio. We also offer private dining, making us the perfect choice for your next office party, birthday, or special event. Come see why The Happy Rooster has long been a favorite among both locals and visitors!';
    } else {
      // Traduction French
      document.getElementById('h1')!.textContent = 'A propos';
      document.getElementById('first-desc')!.textContent =
        'The Happy Rooster sert depuis des décennies une cuisine irrésistible dans une atmosphère alliant raffinement à l’ancienne et charme décalé.';
      document.getElementById('second-descr')!.textContent =
        'Nous proposons un menu délicieux de plats incontournables pour le déjeuner et le dîner, notamment le risotto au poulet grillé et la salade de tomates anciennes, notre plat le plus populaire étant le Chicken Wrap.';
      document.getElementById('third-descr')!.textContent =
        'Venez faire une pause après avoir exploré les boutiques locales, ou passez une soirée à savourer nos plats et boissons dans notre salle à manger intime ou sur notre terrasse extérieure. Nous proposons également des repas privés, ce qui fait de nous le choix idéal pour votre prochaine fête d’entreprise, anniversaire ou événement spécial. Venez découvrir pourquoi The Happy Rooster est depuis longtemps un favori tant des habitants que des visiteurs!';
    }
  }
}
