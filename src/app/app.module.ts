import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { ReportComponent } from './pages/report/report.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { FlagComponent } from './components/flag/flag.component';
import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersComponent,
    CalenderComponent,
    ReportComponent,
    MyProfileComponent,
    ModalFormComponent,
    FlagComponent,
    FieldErrorDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
