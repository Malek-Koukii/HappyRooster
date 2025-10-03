import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  public url: any;

  constructor(private router: Router, public spinnerService: SpinnerService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit() {
    this.spinnerService.startLoadingSpinner();
    setTimeout(() => {
      this.spinnerService.stopLoadingSpinner();
    }, 2000);
  }
}
