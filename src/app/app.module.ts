import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './_site/page-not-found/page-not-found.component';
import {HomeComponent} from './_site/home/home.component';
import {FooterComponent} from './_site/footer/footer.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {ReactiveFormsModule} from '@angular/forms';
import {HashLocationStrategy, LocationStrategy, NgOptimizedImage} from '@angular/common';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {HttpClientModule} from '@angular/common/http';
import {CvPageComponent} from './cv-page/cv-page.component';
import {ExperiencePageComponent} from './experience-page/experience-page.component';
import {MdbAccordionModule} from 'mdb-angular-ui-kit/accordion';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import {MdbCheckboxModule} from 'mdb-angular-ui-kit/checkbox';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {MdbDropdownModule} from 'mdb-angular-ui-kit/dropdown';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {MdbModalModule} from 'mdb-angular-ui-kit/modal';
import {MdbPopoverModule} from 'mdb-angular-ui-kit/popover';
import {MdbRadioModule} from 'mdb-angular-ui-kit/radio';
import {MdbRangeModule} from 'mdb-angular-ui-kit/range';
import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {MdbScrollspyModule} from 'mdb-angular-ui-kit/scrollspy';
import {MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
import {MdbTooltipModule} from 'mdb-angular-ui-kit/tooltip';
import {MdbValidationModule} from 'mdb-angular-ui-kit/validation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TypingDirective} from './typing.directive';
import { SkillElementComponent } from './skill-element/skill-element.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    FooterComponent,
    ContactFormComponent,
    ProjectsPageComponent,
    AboutPageComponent,
    CvPageComponent,
    ExperiencePageComponent,
    TypingDirective,
    SkillElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
  ],
  providers: [
    provideAnimationsAsync(),
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
