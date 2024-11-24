import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { navAnimation, slider } from './shared/route-animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slider, navAnimation],
})
export class AppComponent {
  title = 'animation-page';
  activeLink: string = '/';
  constructor(private router: Router, private route: ActivatedRoute) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
