import {
  NgModule,
  ModuleWithProviders,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SHARED_COMPONENTS } from './components';
import { SHARED_DIRECTIVES } from './directives';
import { SHARED_PIPES } from './pipes';
import { SHARED_PROVIDERS } from './services';
import { NavbarMenuService } from './components/navbar/navbar-menu.service';
import { MultilingualModule } from './components/i18n';



/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

const SHARED_MODULES: any[] = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
   
];

@NgModule({
  imports: [...SHARED_MODULES],

  declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES, SHARED_DIRECTIVES],

  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
    ...SHARED_MODULES,
    SHARED_DIRECTIVES,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NavbarMenuService, MultilingualModule],
})
export class SharedModule {
  static forRoot(
    configuredProviders: Array<any>
  ): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...SHARED_PROVIDERS, ...configuredProviders],
    };
  }
}
