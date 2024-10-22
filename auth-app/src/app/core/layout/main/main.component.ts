import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
      <main class="main-container">
          <router-outlet></router-outlet>
      </main>
  `,
  styles: `
    :host {
      flex-grow: 1;
      text-align: center;
    }

    .main-container {
      margin-top: 70px;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
