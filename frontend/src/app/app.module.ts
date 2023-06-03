import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { RecentsLayoutComponent } from './components/recents-layout/recents-layout.component';
import { RecentsCardComponent } from './components/recents-card/recents-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogHeroComponent } from './components/blog-hero/blog-hero.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blog/:id', component: BlogHeroComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FeaturedCardComponent,
    RecentsLayoutComponent,
    RecentsCardComponent,
    BlogCardComponent,
    BlogHeroComponent,
    BlogItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
