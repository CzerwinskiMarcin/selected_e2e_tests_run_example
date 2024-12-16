import { Routes } from '@angular/router';
import { Page1Component } from './components/pages/page1/page1.component';
import { Page2Component } from './components/pages/page2/page2.component';
import { Page3Component } from './components/pages/page3/page3.component';
import { Page4Component } from './components/pages/page4/page4.component';

export const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component },
];
