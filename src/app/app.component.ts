import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { moveCardsRight, slider } from './shared/route-animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slider, moveCardsRight],
})
export class AppComponent {
  title = 'animation-page';

  navLinks = [
    { route: '/', label: 'page1', active: false },
    { route: '/page2', label: 'page2', active: false },
    { route: '/page3', label: 'page3', active: false },
  ];

  menuVisible = true;
  selectedIndex: number | null = null;
  // Cette fonction gère le clic et l'activation des animations
  onNavClick(index: number) {
    this.menuVisible = false;
    // Marque la bande comme active et gère les autres bandes
    this.navLinks = this.navLinks.map((link, i) => ({
      ...link,
      active: i === index,
    }));

    this.selectedIndex = index;

    // Déclenche l'animation de fermeture
    this.closeMenuAndNavigate();
  }

  // Fonction pour gérer la fermeture du menu avant la navigation
  closeMenuAndNavigate() {
    // Lancer l'animation et attendre qu'elle soit terminée avant de naviguer
    setTimeout(() => {
      window.location.href = this.navLinks[this.selectedIndex!].route;
    }, 600); // Ajuster la durée pour correspondre à la durée de l'animation
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
