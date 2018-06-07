import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { VideosComponent } from './videos/videos.component';
import { ActivityComponent } from './activity/activity.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudioComponent } from './dashboard/studio/studio.component';
import { DanceComponent } from './dashboard/dance/dance.component';
import { SportsComponent } from './dashboard/sports/sports.component';
import { SwimmingComponent } from './dashboard/swimming/swimming.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'music',
  component: MusicComponent
},
{
  path: 'videos',
  component: VideosComponent
},
{
  path: 'activity',
  component: ActivityComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'dashboard',
  component: DashboardComponent,
  children: [
    {
      path: 'studio',
      component: StudioComponent
    },
    {
      path: 'dance',
      component: DanceComponent
    },
    {
      path: 'sports',
      component: SportsComponent
    },
    {
      path: 'swimming',
      component: SwimmingComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
