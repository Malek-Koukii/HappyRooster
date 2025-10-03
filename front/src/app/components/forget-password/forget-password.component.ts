import { AfterViewInit, Component } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements AfterViewInit {

  constructor(private translationService: TranslationService) {}

  ngAfterViewInit() {
    this.translationService.currentLang$.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    const lang = this.translationService.getCurrentLanguage();
    const emailInput = document.getElementById('emailReset') as HTMLInputElement;

    if (lang === 'en') {
      // Traduction English
      document.getElementById('resetPassword')!.textContent = 'Reset Password';
      document.getElementById('submitReset')!.textContent = 'Reset Password';
      document.getElementById('instructions')!.textContent = 'Enter your email and we\'ll send you instructions on how to reset your password';

      document.getElementById('loginBelow')!.textContent = 'Please login below.';
      emailInput.placeholder = 'Email';
    } else {
      // Traduction French
      document.getElementById('resetPassword')!.textContent = 'Réinitialiser le mot de passe';
      document.getElementById('submitReset')!.textContent = 'Réinitialiser mot de passe';
      document.getElementById('instructions')!.textContent = 'Entrez votre e-mail et nous vous enverrons des instructions pour réinitialiser votre mot de passe';
      document.getElementById('loginBelow')!.textContent = 'Veuillez vous connecter ci-dessous.';
      emailInput.placeholder = 'E-mail';
    }
  }
}
