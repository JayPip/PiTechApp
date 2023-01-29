import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUrlDataComponent } from './components/input-url-data/input-url-data.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TaskWindowComponent } from './components/task-window/task-window.component';
import { MatTabsModule} from "@angular/material/tabs";
import  {MatButtonModule}  from "@angular/material/button";
import { TaskList1Component } from './components/task-list1/task-list1.component';
import { TabService } from './services/tab.service';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InputUrlDataComponent,
    TaskWindowComponent,
    TaskList1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    BrowserAnimationsModule

  ],
  providers: [TabService],
  bootstrap: [AppComponent],
  entryComponents: [TaskList1Component]
})
export class AppModule { }
