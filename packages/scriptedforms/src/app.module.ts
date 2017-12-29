// scriptedforms
// Copyright (C) 2017 Simon Biggs

// Licensed under both the Apache License, Version 2.0 (the "Apache-2.0") and 
// GNU Affrero General Public License as published by the Free Software 
// Foundation, either version 3 of the License, or (at your option) any later 
// version (the "AGPL-3.0+").

// You may not use this file except in compliance with both the Apache-2.0 AND 
// the AGPL-3.0+ in combination (the "Combined Licenses").

// You may obtain a copy of the AGPL-3.0+ at

//     https://www.gnu.org/licenses/agpl-3.0.txt

// You may obtain a copy of the Apache-2.0 at 

//     https://www.apache.org/licenses/LICENSE-2.0.html

// Unless required by applicable law or agreed to in writing, software
// distributed under the Combined Licenses is distributed on an "AS IS" BASIS, 
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See 
// the Combined Licenses for the specific language governing permissions and 
// limitations under the Combined Licenses.

/*
The root app module.
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, ErrorHandler } from '@angular/core';

import {
  MatButtonModule, MatInputModule, MatIconModule, MatCheckboxModule, 
  MatSliderModule, MatSelectModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppErrorHandler } from './app-error-handler';

import { KernelService } from './services/kernel.service';
import { VariableService } from './services/variable.service';
import { OutputService } from './services/output.service';
import { ModelService } from './services/model.service';
import { SaveService } from './services/save.service';
import { WatchdogService } from './services/watchdog.service';
import { TemplateService } from './services/template.service';

import { FormBuilderModule } from './form-builder-module/form-builder.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSelectModule,
    FormBuilderModule
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [
    KernelService,
    OutputService,
    VariableService,
    ModelService,
    SaveService,
    WatchdogService,
    TemplateService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class AppModule {
  ngDoBootstrap(app: ApplicationRef) {}
}
