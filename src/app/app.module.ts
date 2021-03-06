import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { VideosComponent } from './videos/videos.component';
import { ActivityComponent } from './activity/activity.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationService } from './service/notification.service';
import { Popover, PopoverModule } from 'ngx-popover';
import { PopoverDirective } from './videos/popover.directive';
import { HeaderComponent } from './header/header.component';
import { StudioComponent } from './dashboard/studio/studio.component';
import { DanceComponent } from './dashboard/dance/dance.component';
import { SportsComponent } from './dashboard/sports/sports.component';
import { SwimmingComponent } from './dashboard/swimming/swimming.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MusicComponent,
    VideosComponent,
    ActivityComponent,
    LoginComponent,
    DashboardComponent,
    PopoverDirective,
    HeaderComponent,
    StudioComponent,
    DanceComponent,
    SportsComponent,
    SwimmingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
