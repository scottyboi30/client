import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import {ToastrModule} from 'ngx-toastr';
import {BreadcrumbModule} from 'xng-breadcrumb';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NavBarComponent, NotFoundComponent, ServerErrorComponent, SectionHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    BreadcrumbModule,
    SharedModule
  ],
  exports: [NavBarComponent, SectionHeaderComponent]
})
export class CoreModule { }
