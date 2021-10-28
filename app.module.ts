
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

const routes : Routes = [
  {
    path: '',
    redirectTo: '/post-list',
    pathMatch: 'full'
  },
  {
    path: 'post-list',
    component: PostListComponent,
  },
  {
    path: 'post-add',
    component: PostEditComponent,
  },
  {
    path: 'post-edit/:index',
    component: PostEditComponent,
  },
  //{
    //path: 'auth',
    //component: AuthComponent,
  //},
  {
    path: 'auth/signup',
    component: AuthComponent,
  },
  {
    path: 'auth/login',
    component: AuthComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    PostComponent,
    PostEditComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
   // CUSTOM_ELEMENTS_SCHEMA,
    //NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }