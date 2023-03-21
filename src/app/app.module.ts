import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule, routings } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import { NotAvailableComponent } from './not-available/not-available.component';
// import { SearchComponent } from './search/search.component';
// import { UserDetailsComponent } from './components/user-details/user-details.component';
// import { ChildComponent } from './components/child/child.component';
// import { Child2Component } from './components/child2/child2.component';
// import { AddComponent } from './components/add/add.component';
// import { HomeComponent } from './components/home/home.component';
// import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    routings,
    NotAvailableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,//PLACE AppRoutingModule IN THE LAST
      //WE CAN WRITE ROUTING PATH HERE ALSO
  //   RouterModule.forRoot([
  //     {path:'', redirectTo:'home', pathMatch:'full'},
  // { path: 'child', component: ChildComponent },
  // { path: 'child2', component: Child2Component },
  // { path: 'add', component: AddComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'home/:id', component: EditComponent },
  // {path:'serach',component:SearchComponent},
  // {path:'**', component:NotAvilableComponent}
  //    ]),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}