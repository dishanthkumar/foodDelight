import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const components = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...components,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
