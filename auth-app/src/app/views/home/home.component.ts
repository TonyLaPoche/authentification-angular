import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  template: `
    <h1>
      home works!
    </h1>
    <p>
      {{authServices.isAuthenticated$ | async}}
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
  authServices = inject(AuthService);

}
