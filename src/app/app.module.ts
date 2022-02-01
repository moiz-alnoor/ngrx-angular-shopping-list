import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule,ActionReducerMap } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ShoppingReducer } from './store/reducers/shopping-reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot( {shopping:ShoppingReducer} as ActionReducerMap<any,any>),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
