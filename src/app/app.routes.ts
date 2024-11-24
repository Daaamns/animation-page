import { Routes } from '@angular/router';
import { Page1Component } from './pages/page-1/page-1.component';
import { Page2Component } from './pages/page-2/page-2.component';
import { Page3Component } from './pages/page-3/page-3.component';

export const routes: Routes = [
  { path: '', component: Page1Component, data: { animation: 'isRight' } },
  { path: 'page2', component: Page2Component, data: { animation: 'isRight' } },
  { path: 'page3', component: Page3Component, data: { animation: 'isRight' } },
];
