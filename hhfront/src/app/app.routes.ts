import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompaniesComponent } from './companies/companies.component';



export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component:HomeComponent, title:'Home'},
    {path:'about', component:AboutComponent, title:'About'},
    {path:'companies',component:CompaniesComponent,title:'Companies'}
];

