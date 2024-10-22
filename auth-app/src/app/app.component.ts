import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./core/layout/header/header.component";
import {MainComponent} from "./core/layout/main/main.component";
import {FooterComponent} from "./core/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent],
  template: `
  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>
  `,
  styles: `
    :host  {
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
