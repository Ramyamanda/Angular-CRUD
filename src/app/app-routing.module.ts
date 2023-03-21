import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NotAvailableComponent } from './not-available/not-available.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path: 'add', component: AddComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: UserDetailsComponent },
  { path: 'home/:id/edit',component:EditComponent },
  { path:'**', component:NotAvailableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routings = [
  AddComponent,
  HomeComponent,
  EditComponent,
  UserDetailsComponent,
];