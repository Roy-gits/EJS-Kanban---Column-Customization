import { AutoCompleteAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { DialogAllModule } from '@syncfusion/ej2-angular-popups';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { KanbanAllModule } from '@syncfusion/ej2-angular-kanban';

import { TabAllModule } from '@syncfusion/ej2-angular-navigations';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ BrowserModule, NumericTextBoxAllModule, TabAllModule,GridAllModule, DialogAllModule, DatePickerAllModule, DropDownListModule, AutoCompleteAllModule, KanbanAllModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
