import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { CityItemComponent } from './pages/city-list/city-item/city-item.component';
import { CityDetailComponent } from './pages/city-detail/city-detail.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'city', component: CityItemComponent },
  { path: 'city/:details', component: CityDetailComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
