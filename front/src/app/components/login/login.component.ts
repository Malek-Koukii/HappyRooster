import { AfterViewInit, Component } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  constructor(private translationService: TranslationService) {}

  ngAfterViewInit() {
    this.translationService.currentLang$.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    const lang = this.translationService.getCurrentLanguage();
    const emailInput = document.getElementById('emailLogin') as HTMLInputElement;
    const passwordInput = document.getElementById('passwordLogin') as HTMLInputElement;

    if (lang === 'en') {
      // Traduction English
      document.getElementById('login')!.textContent = 'Login';
      document.getElementById('forgetPassword')!.textContent = 'Forgot Password?';
      document.getElementById('submitLogin')!.textContent = 'Login';
      document.getElementById('account')!.textContent = 'Don\'t have an account';
      document.getElementById('create')!.textContent = 'Create One';
      document.getElementById('welcome')!.textContent = 'Welcome Back!';
      document.getElementById('loginBelow')!.textContent = 'Please login below.';
      emailInput.placeholder = 'Email';
      passwordInput.placeholder = 'Password';
    } else {
      // Traduction French
      document.getElementById('login')!.textContent = 'Se connecter';
      document.getElementById('forgetPassword')!.textContent = 'Mot de passe oublié?';
      document.getElementById('submitLogin')!.textContent = 'Se connecter';
      document.getElementById('account')!.textContent = 'Je n\'ai pas de compte';
      document.getElementById('create')!.textContent = 'Créer une';
      document.getElementById('welcome')!.textContent = 'Bienvenue!';
      document.getElementById('loginBelow')!.textContent = 'Veuillez vous connecter ci-dessous.';
      emailInput.placeholder = 'E-mail';
      passwordInput.placeholder = 'Mot de passe';
    }
  }
}
