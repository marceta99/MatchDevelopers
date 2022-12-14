import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { MatchessComponent } from './matchess/matchess.component';
import { MyProfComponent } from './my-prof/my-prof.component';
import { SlidesComponent } from './slides/slides.component';
import { LikesComponent } from './likes/likes.component';
import { HttpClientModule } from '@angular/common/http';
import { CommunityComponent } from './community/community.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    MatchessComponent,
    MyProfComponent,
    SlidesComponent,
    LikesComponent,
    CommunityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
