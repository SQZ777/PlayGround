import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessageListComponent } from './message-list/message-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'messageList', component: MessageListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule(
  {
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
  }
)

export class AppRoutingModule { }
