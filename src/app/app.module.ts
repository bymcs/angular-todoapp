import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
