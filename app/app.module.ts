
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { VisComponent } from './app/vis/vis.component';


@NgModule({
  declarations: [    
    AppComponent,
    VisComponent    
  ],
  imports: [    
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    BrowserModule
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
