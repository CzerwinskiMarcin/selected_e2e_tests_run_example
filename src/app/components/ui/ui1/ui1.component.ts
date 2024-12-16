import { Component } from '@angular/core';
import { ButtonComponent } from '../common/button/button.component';

@Component({
  selector: 'app-ui1',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './ui1.component.html',
  styleUrl: './ui1.component.scss'
})
export class Ui1Component {

}
