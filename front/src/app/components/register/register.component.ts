import { AfterViewInit, Component } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {

  constructor(private translationService: TranslationService) {}

  ngAfterViewInit() {
    this.translationService.currentLang$.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    const lang = this.translationService.getCurrentLanguage();
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const emailInput = document.getElementById('emailRegister') as HTMLInputElement;
    const passwordInput = document.getElementById('passwordRegister') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirmPassword') as HTMLInputElement;

    if (lang === 'en') {
      // Traduction English
      document.getElementById('register')!.textContent = 'Sign Up';
      document.getElementById('submitRegister')!.textContent = 'Sign Up';
      document.getElementById('accountRegister')!.textContent = 'Already have an account?';
      document.getElementById('loginAccount')!.textContent = 'Login';
      document.getElementById('welcomeRegister')!.textContent = 'Welcome!';
      document.getElementById('registerBelow')!.textContent = 'Creating an account will allow you to place your orders with a few clicks.';
      usernameInput.placeholder = 'Username';
      emailInput.placeholder = 'Email';
      passwordInput.placeholder = 'Password';
      confirmPasswordInput.placeholder = 'Confirm Password';
    } else {
      // Traduction French
      document.getElementById('register')!.textContent = 'S\'inscrire';
      document.getElementById('submitRegister')!.textContent = 'Inscription';
      document.getElementById('accountRegister')!.textContent = 'Avez-vous déjà un compte?';
      document.getElementById('loginAccount')!.textContent = 'Se connecter';
      document.getElementById('welcomeRegister')!.textContent = 'Bienvenue!';
      document.getElementById('registerBelow')!.textContent = 'La création d\'un compte vous permettra de passer vos commandes en quelques clics.';
      usernameInput.placeholder = 'Nom d\'utilisateur';
      emailInput.placeholder = 'E-mail';
      passwordInput.placeholder = 'Mot de passe';
      confirmPasswordInput.placeholder = 'Confirmez le mot de passe';
    }
  }
}
