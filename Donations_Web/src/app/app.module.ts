import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { InitialpageComponent } from './initialpage/initialpage.component';
import { DonationslistComponent } from './show/donationslist/donationslist.component';

const appRoutes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'show', component: ShowComponent },
  { path: 'initial', component: InitialpageComponent },
  { path: '',
    redirectTo: '/initial',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ShowComponent,
    InitialpageComponent,
    DonationslistComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
