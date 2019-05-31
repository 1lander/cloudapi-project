import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlanelistComponent } from './planelist/planelist.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AirlineService } from './airline.service';
import { HttpClientModule } from '@angular/common/http';
import { AddplaneComponent } from './addplane/addplane.component';
import { FormsModule }   from '@angular/forms';
import { DeleteplaneComponent } from './deleteplane/deleteplane.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanelistComponent,
    HomeComponent,
    AddplaneComponent,
    DeleteplaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "Home", component: HomeComponent},
      {path: "Planes", component: PlanelistComponent},
      {path: "Addplane", component: AddplaneComponent},
      {path: "Deleteplane", component: DeleteplaneComponent}
    ])
  ],
  providers: [AirlineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
