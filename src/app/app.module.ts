import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CityItemComponent } from './pages/city-list/city-item/city-item.component';
import { CityDetailComponent } from './pages/city-detail/city-detail.component';
import { SearchComponent } from './pages/search/search.component';
import { CityListComponent } from './pages/city-list/city-list.component';
import { CitiesDirective } from './cities.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityItemComponent,
    CityDetailComponent,
    SearchComponent,
    CityListComponent,
    CitiesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
