import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from '../button/button.module';
import { ApiModule } from '../api/api.module';

@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    ButtonModule,
    HttpClientModule,
    ApiModule
  ],
  providers: []
})
export class BlogModule { }
