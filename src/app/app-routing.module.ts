import { NgModule } from '@angular/core';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'suggestions', component: ListSuggestionComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
