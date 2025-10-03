import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  public englishLabelDropdown: string = 'English';
  public englishLabel: string = 'English';
  public frenchLabel: string = 'French';
  public selectedCarousel: string = 'carousel-item1';

  constructor(
    private translationService: TranslationService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  
  ngAfterViewInit() {
    this.translationService.currentLang$.subscribe(() => {
      this.updateTranslations();
    });

    this.renderer.listen('document', 'slid.bs.carousel', (event) => {
      const slideIndex = event.to; 
      this.showCarouselItem(`carousel-item${slideIndex + 1}`);
    });
  }

  updateTranslations() {
    const lang = this.translationService.getCurrentLanguage();

    if (lang === 'en') {
      // Traduction English
      this.englishLabelDropdown = 'English';
      this.englishLabel = 'English';
      this.frenchLabel = 'French';
      this.renderer.addClass(this.el.nativeElement.querySelector('#enOption'), 'd-none');
      this.renderer.removeClass(this.el.nativeElement.querySelector('#frOption'), 'd-none');
      (this.el.nativeElement.querySelector('#englishFlag') as HTMLImageElement).src =
        'assets/imgs/english.png';
      document.getElementById('title1')!.textContent = 'Quality Chicken Fillet';
      document.getElementById('subTitle1')!.textContent = 'Chicken Fillet Burger with Cheese';
      document.getElementById('description1')!.textContent = 'Succulent chicken fillet burger cooked to perfection with cheddar cheese and fresh salad in a soft bun';
      document.getElementById('bannerBody')!.textContent = 'Ready in';
      document.getElementById('delivery')!.textContent = 'Delivery Available';
      document.getElementById('order')!.textContent = 'Order';
      document.getElementById('title2')!.textContent = 'Taste Real Chicken';
      document.getElementById('subTitle2')!.textContent = '3 Pieces Chicken and Chips';
      document.getElementById('description2')!.textContent = '3 tender pieces of fresh chicken marinated in special breadcrumb mix and fried in our high pressure frier to perfection';
      document.getElementById('bannerBody2')!.textContent = 'Ready in';
      document.getElementById('delivery2')!.textContent = 'Delivery Available';
      document.getElementById('order2')!.textContent = 'Order';
      document.getElementById('title3')!.textContent = 'Hot Wings';
      document.getElementById('subTitle3')!.textContent = '6 Hot Wings';
      document.getElementById('description3')!.textContent = 'Wet your appetite with our special hot wings prepared from large wings dipped in our hot mix and fried to tenderness and fried in our high pressure frier to perfection';
      document.getElementById('bannerBody3')!.textContent = 'Ready in';
      document.getElementById('delivery3')!.textContent = 'Delivery Available';
      document.getElementById('order3')!.textContent = 'Order';
      document.getElementById('title4')!.textContent = 'Chicken Wrap';
      document.getElementById('subTitle4')!.textContent = 'Chicken and Salad Wrap';
      document.getElementById('description4')!.textContent = 'Tender pieces of deep fried chicken breast together with fresh salad and mayonaise wrapped in a soft flat bread';
      document.getElementById('bannerBody4')!.textContent = 'Ready in';
      document.getElementById('delivery4')!.textContent = 'Delivery Available';
      document.getElementById('order4')!.textContent = 'Order';
      document.getElementById('slideTitle1')!.textContent = 'Chicken Fillet Burger';
      document.getElementById('slideTitle2')!.textContent = '3 Pieces Chicken and Chips';
      document.getElementById('slideTitle3')!.textContent = '6 Hot Wings';
      document.getElementById('slideTitle4')!.textContent = 'Chicken Wrap';
      document.getElementById('offer')!.textContent = 'Offer';
    } else {
      // Traduction French
      this.englishLabelDropdown = 'Français';
      this.englishLabel = 'Anglais';
      this.frenchLabel = 'Français';
      this.renderer.removeClass(this.el.nativeElement.querySelector('#enOption'), 'd-none');
      this.renderer.addClass(this.el.nativeElement.querySelector('#frOption'), 'd-none');
      (this.el.nativeElement.querySelector('#englishFlag') as HTMLImageElement).src =
        'assets/imgs/french.png';
      document.getElementById('title1')!.textContent = 'Filet de Poulet de Qualité';
      document.getElementById('subTitle1')!.textContent = 'Burger de Filet de Poulet au Fromage';
      document.getElementById('description1')!.textContent = 'Succulent burger de filet de poulet cuit à perfection avec du cheddar et de la salade fraîche dans un petit pain moelleux';
      document.getElementById('bannerBody')!.textContent = 'Prêt dans';
      document.getElementById('delivery')!.textContent = 'Livraison Disponible';
      document.getElementById('order')!.textContent = 'Commander';
      document.getElementById('title2')!.textContent = 'Goûtez au vrai poulet';
      document.getElementById('subTitle2')!.textContent = '3 Morceaux de Poulet et Frites';
      document.getElementById('description2')!.textContent = '3 tendres morceaux de poulet frais marinés dans un mélange spécial de chapelure et frits à la perfection dans notre friteuse haute pression';
      document.getElementById('bannerBody2')!.textContent = 'Prêt dans';
      document.getElementById('delivery2')!.textContent = 'Livraison Disponible';
      document.getElementById('order2')!.textContent = 'Commander';
      document.getElementById('title3')!.textContent = 'Ailes chaudes';
      document.getElementById('subTitle3')!.textContent = '6 Ailes chaudes';
      document.getElementById('description3')!.textContent = 'Mettez en appétit avec nos ailes chaudes spéciales préparées à partir de grandes ailes trempées dans notre mélange chaud et frites jusqu\'à tendreté et frites dans notre friteuse haute pression à la perfection';
      document.getElementById('bannerBody3')!.textContent = 'Prêt dans';
      document.getElementById('delivery3')!.textContent = 'Livraison Disponible';
      document.getElementById('order3')!.textContent = 'Commander';
      document.getElementById('title4')!.textContent = 'Wrap au poulet';
      document.getElementById('subTitle4')!.textContent = 'Wrap au Poulet et Salade';
      document.getElementById('description4')!.textContent = 'Tendres morceaux de poitrine de poulet frits accompagnés de salade fraîche et de mayonnaise enveloppés dans un pain plat moelleux';
      document.getElementById('bannerBody4')!.textContent = 'Prêt dans';
      document.getElementById('delivery4')!.textContent = 'Livraison Disponible';
      document.getElementById('order4')!.textContent = 'Commander';
      document.getElementById('slideTitle1')!.textContent = 'Burger de Filet de Poulet';
      document.getElementById('slideTitle2')!.textContent = '3 Morceaux de Poulet et Frites';
      document.getElementById('slideTitle3')!.textContent = '6 Ailes Chaudes';
      document.getElementById('slideTitle4')!.textContent = 'Wrap au Poulet';
      document.getElementById('offer')!.textContent = 'Offre';
    }
  }

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }

  showCarouselItem(item: string) {
    this.selectedCarousel = item;
  }

}
