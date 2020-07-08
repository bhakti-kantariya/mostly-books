import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers} from './store'
import { StoreRouterConnectingModule, NavigationActionTiming } from '@ngrx/router-store';
import { effects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //Set up ngrx store.
    StoreModule.forRoot(reducers, {metaReducers}),

    //Set up ngrx router Store.
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation
    }),

    //Set up ngrx effects.
    EffectsModule.forRoot(effects),

    StoreDevtoolsModule.instrument({maxAge: 100})
  ],
  providers: [],
  //Bootstrap the AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
