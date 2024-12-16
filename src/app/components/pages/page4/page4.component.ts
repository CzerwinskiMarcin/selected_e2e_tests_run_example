import { Component } from '@angular/core';
import { Ui1Component } from '../../ui/ui1/ui1.component';
import { Ui2Component } from '../../ui/ui2/ui2.component';

@Component({
  selector: 'app-page4',
  standalone: true,
  imports: [Ui1Component, Ui2Component],
  templateUrl: './page4.component.html',
  styleUrl: './page4.component.scss'
})
export class Page4Component {

}
