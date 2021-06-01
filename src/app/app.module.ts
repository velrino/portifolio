import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DividerHeaderComponent } from './shared/components/divider-header/divider-header.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    DividerHeaderComponent,
    SkillsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      animation: true,
      animateTitle: true,
      lazy: false,
      animationDuration: 100,
      showSubtitle: false,
      showInnerStroke: false,
      outerStrokeGradient: false,
      outerStrokeWidth: 7,
      outerStrokeColor: '#30bae7',
      outerStrokeGradientStopColor: '#603cab',
      titleColor: 'white',
      unitsColor: 'white',
      unitsFontSize: '20',
      titleFontSize: '30',
      radius: 50
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
