import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ItemsComponent } from './items/items.component';
import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent,
    // ItemsComponent
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
