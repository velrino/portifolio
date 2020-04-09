import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DividerHeaderComponent } from './shared/components/divider-header/divider-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    DividerHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
