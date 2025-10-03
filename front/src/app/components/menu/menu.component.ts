import { Component } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';
type Lang = 'en' | 'fr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(public translationService: TranslationService) {}

  translations: Record<Lang, Record<string, string>> = {
    en: {
      appetizers: 'Appetizers',
      soups: 'Soups',
      entrees: 'Entrees',
      salads: 'Salads',
      sandwiches: 'Sandwiches',
      supplement: 'Supplement',
    },
    fr: {
      appetizers: 'Apéritifs',
      soups: 'Soupes',
      entrees: 'Entrées',
      salads: 'Salades',
      sandwiches: 'Sandwichs',
      supplement: 'supplément',
    },
  };

  get currentLang(): Lang {
    return this.translationService.getCurrentLanguage() as Lang;
  }
}
