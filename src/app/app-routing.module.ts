import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { ReportComponent } from './pages/report/report.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'report', component: ReportComponent },
  { path: 'profile', component: MyProfileComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
