import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
import { LikesComponent } from './likes/likes.component';
import { LoginComponent } from './login/login.component';
import { MatchessComponent } from './matchess/matchess.component';
import { MyProfComponent } from './my-prof/my-prof.component';
import { SlidesComponent } from './slides/slides.component';

const routes: Routes = [
  {path :'' , pathMatch:"full", component :  HomeComponent },
  {path :'home' , component :  HomeComponent, children: [
    { path: 'slides', component : SlidesComponent},
    { path: 'matches', component : MatchessComponent},
    { path: 'profile', component : MyProfComponent},
    { path: 'likes', component : LikesComponent},
    { path: 'community', component : CommunityComponent}

  ] },
  {path :'login' , component :  LoginComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
