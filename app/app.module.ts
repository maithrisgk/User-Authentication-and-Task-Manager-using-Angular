import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { MessageService } from './services/message.service';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskFormComponent } from './components/task-manager/task-form/task-form.component';
import { TaskListComponent } from './components/task-manager/task-list/task-list.component';
import { TaskItemComponent } from './components/task-manager/task-list/task-item/task-item.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { TaskDetailComponent } from './components/task-manager/task-detail/task-detail.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { TaskCompletedDirective } from './directives/task-completed.directive';
import { HighlightDirective } from './directives/highlight.directive';

const routes:Routes=[
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login', component: LoginFormComponent},
  {path:'register', component: RegisterFormComponent},
  {path: 'tasks', component: TaskManagerComponent, canActivate: [AuthGuard]},
  {path:'tasks/detail/:id', component:TaskDetailComponent, canActivate: [AuthGuard]},
  {path:'**',component:PageNotFoundComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    TaskManagerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent,
    RegisterFormComponent,
    PageNotFoundComponent,
    TaskDetailComponent,
    MyUppercasePipe,
    SearchPipe,
    TaskCompletedDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskService, AuthGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
