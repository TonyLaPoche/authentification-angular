import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [],
  template: `
    <p>
      authentification works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthentificationComponent {

}
