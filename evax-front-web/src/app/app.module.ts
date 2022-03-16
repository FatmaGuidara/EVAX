import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './FAQ/views/navbar/navbar.component';
import { FaqComponent } from './FAQ/views/faq/faq.component';
import { DashboardComponent } from './dashboard/views/dashboard/dashboard.component';
import { DrugstoresFormComponent } from './drugstores-space/views/drugstores-form/drugstores-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FaqComponent,
    DashboardComponent,
    DrugstoresFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
