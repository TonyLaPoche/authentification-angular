import {ChangeDetectionStrategy, Component, HostListener, inject} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {AuthCustomService} from "../../auth/auth-custom.service";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MatToolbarModule, MatProgressBar, MatIcon, MatIconButton, RouterLink],
    template: `
        <mat-progress-bar mode="determinate" [value]="scrollPercentage" class="bg-theme"
                          aria-label="progress-bar scrolling"></mat-progress-bar>
        <mat-toolbar class="head-container">
            <a routerLink="home" class="head-button" aria-label="title" aria-description="training app">Accueil</a>
            <span class="head-spacer"></span>
            <a routerLink="movies" class="head-button" aria-label="title" aria-description="training app">Movies</a>
            <a routerLink="authentication" class="head-button" aria-label="title" aria-description="authentication app">
                {{ isLogged() ? 'profil' : 'login' }}
            </a>
        </mat-toolbar>
    `,
    styles: `
      :host {
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 74px;
        width: 100%;
        z-index: 2;
      }

      .head-container {
        height: 64px;
        padding: 0 1rem;
        display: flex;
        gap: 1rem;

      }

      .head-spacer {
        width: 80%;
        height: 48px;
        display: flex;
        justify-content: center;
      }

      .head-button {
        border-radius: 10px;
        text-decoration: none;
        color: inherit;
        text-transform: uppercase;
        letter-spacing: .2rem;

        &-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          height: 48px;
          border-radius: 10px;
          padding: 0.2rem 0.8rem;
          margin: 0 .2rem;
        }

        &:hover {
          cursor: pointer;
        }
      }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    authCustomService = inject(AuthCustomService);
    isLogged = this.authCustomService.isLogged

    scrollPercentage: number = 0;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollOffset =
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        this.scrollPercentage = (scrollOffset / windowHeight) * 100;
    }
}
