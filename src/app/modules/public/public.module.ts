import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PublicRoutingModule } from './public.routing';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PublicComponent } from './public.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PublicComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    PublicRoutingModule
  ]
})

export class PublicModule { }
