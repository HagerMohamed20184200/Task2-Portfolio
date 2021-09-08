import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LanguageComponentComponent } from './language-component/language-component.component';
import { ServiceComponentComponent } from './service-component/service-component.component';

const routes: Routes = [
{  path:'language', component : LanguageComponentComponent},
{  path:'service', component : ServiceComponentComponent},
{  path:'about', component : AboutComponentComponent},
{  path:'home', component : HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
