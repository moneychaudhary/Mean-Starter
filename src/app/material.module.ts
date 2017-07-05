import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdInputModule, MdMenuModule,
  MdProgressSpinnerModule, MdSnackBarModule,
  MdToolbarModule, MdTabsModule, MdSelectModule, MdSidenavModule, MdExpansionModule, MdButtonToggleModule, MdChipsModule
} from '@angular/material';
import {NgModule} from '@angular/core';

const modules = [
  MdInputModule,
  MdToolbarModule,
  MdButtonModule,
  MdCheckboxModule,
  MdSelectModule,
  MdIconModule,
  MdMenuModule,
  MdCardModule,
  MdProgressSpinnerModule,
  MdSnackBarModule,
  MdTabsModule,
  MdSidenavModule,
  MdExpansionModule,
  MdButtonToggleModule,
  MdChipsModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {

}
