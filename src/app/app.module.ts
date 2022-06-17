import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppSharedModule } from './app-shared/app-shared.module';

import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

import 'prismjs/plugins/toolbar/prism-toolbar.min.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetupEnvComponent } from './setup-env/setup-env.component';
import { SetupMarkdownComponent } from './setup-markdown/setup-markdown.component';
import { SetupMermaidComponent } from './setup-mermaid/setup-mermaid.component';
import { SetupMaterialComponent } from './setup-material/setup-material.component';


@NgModule({
  declarations: [
    AppComponent,
    SetupEnvComponent,
    SetupMarkdownComponent,
    SetupMermaidComponent,
    SetupMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppSharedModule ,
    MarkdownModule.forRoot(), 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
