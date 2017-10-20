import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule, ApplicationRef } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA9KBRy0R15SRHtSLUt9PGkr5WFJyF4UqI'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }


