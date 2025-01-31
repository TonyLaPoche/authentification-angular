import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbar,
    DatePipe
  ],
  template: `
    <footer>
      <mat-toolbar color="primary" class="footer-container">
        <ul class="list">
          <li class="list-item">
            <a class="footer-button-icon custom-button" aria-label="redirection Antoine Terrade repository github profil" href="#Github-redirection">

              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
                <mask
                    id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
                  <g fill="#fff">
                    <ellipse cx="9.5" cy="9"
                             rx="1.5" ry="1"/>
                    <ellipse
                        cx="14.5" cy="9" rx="1.5" ry="1"/>
                  </g>
                </mask>
                <g fill="none" stroke="currentColor" stroke-linecap="round"
                   stroke-linejoin="round" stroke-width="2">
                  <path
                      stroke-dasharray="30" stroke-dashoffset="30"
                      d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21">
                    <animate
                        fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0"/>
                  </path>
                  <path
                      stroke-dasharray="10" stroke-dashoffset="10" d="M9 19">
                    <animate fill="freeze"
                             attributeName="stroke-dashoffset"
                             begin="0.7s" dur="0.2s" values="10;0"/>
                    <animate
                        attributeName="d" dur="3s" repeatCount="indefinite"
                        values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"/>
                  </path>
                </g>
              </svg>

            </a>
          </li>
          <li  class="list-item">
            <a class="footer-button-icon custom-button" aria-label="redirection Antoine Terrade linkedin profil" href="#Linkedin-redirection">
              <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                <circle cx="4" cy="4" r="2"
                        fill="currentColor"
                        fill-opacity="0">
                  <animate
                      fill="freeze" attributeName="fill-opacity" dur="0.4s" values="0;1"/>
                </circle>
                <g fill="none"
                   stroke="currentColor"
                   stroke-linecap="round"
                   stroke-width="4">
                  <path
                      stroke-dasharray="12" stroke-dashoffset="12" d="M4 10V20">
                    <animate fill="freeze"
                             attributeName="stroke-dashoffset"
                             begin="0.2s" dur="0.2s"
                             values="12;0"/>
                  </path>
                  <path
                      stroke-dasharray="12" stroke-dashoffset="12" d="M10 10V20">
                    <animate fill="freeze"
                             attributeName="stroke-dashoffset"
                             begin="0.5s" dur="0.2s"
                             values="12;0"/>
                  </path>
                  <path
                      stroke-dasharray="24" stroke-dashoffset="24"
                      d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20">
                    <animate fill="freeze"
                             attributeName="stroke-dashoffset"
                             begin="0.7s" dur="0.5s"
                             values="24;0"/>
                  </path>
                </g>
              </svg>

            </a>
          </li>
        </ul>
        <p class="copyright">&copy;Copyright 2023 - {{ today | date : 'yyyy' }} Antoine Terrade </p>
      </mat-toolbar>
    </footer>

  `,
  styles: `
    .footer-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      height: inherit;
    }

    .list {
      list-style-type: none;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 1rem;

    }
    .copyright {
      font-size: 0.8rem;
      font-style: italic;
      flex-grow: 1;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  today = new Date();
}
