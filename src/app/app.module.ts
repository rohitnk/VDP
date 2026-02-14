import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/story/story.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { FloatingHeartsComponent } from './components/floating-hearts/floating-hearts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoryComponent,
    ProposalComponent,
    FloatingHeartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
