import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  template: `
    <p>
      movies works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent {

}
