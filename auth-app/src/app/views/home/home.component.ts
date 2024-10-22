import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {AuthCustomService} from "../../core/auth/auth-custom.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  template: `
    <h1>
      Movie Center
    </h1>
    <p>
      @if (authCustomServices.isLogged()) {
        Bonjour {{ user?.given_name }} !
      } @else {
        pour aller plus loin identifier vous !
      }
    </p>
    <section>
      <a routerLink="/authentication" aria-label="link" aria-description="authentification pages">connect</a>
      <a routerLink="/movies" aria-label="link" aria-description="movies pages">movies</a>
    </section>
  `,
  styles: `
    section {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  authCustomServices = inject(AuthCustomService);
  user = this.authCustomServices.getUserInfo()
}
