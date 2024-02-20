import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TableComponent } from './table/table.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "users", component: TableComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
