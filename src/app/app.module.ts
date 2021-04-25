import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDiy-9qbOr2ljbP8vCR7BM1qWcjTR-r9Jk",
        authDomain: "fir-angular-auth-cc190.firebaseapp.com",
        projectId: "fir-angular-auth-cc190",
        storageBucket: "fir-angular-auth-cc190.appspot.com",
        messagingSenderId: "379396093531",
        appId: "1:379396093531:web:7f553016b8a899be52b17e"
      }
    )
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
