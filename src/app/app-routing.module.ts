import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './_site/page-not-found/page-not-found.component';
import { HomeComponent } from './_site/home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CvPageComponent } from './cv-page/cv-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projects', component: ProjectsPageComponent},
  { path: 'cv', component: CvPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'contact', component: ContactFormComponent},
  { path: 'home',   redirectTo: '', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
