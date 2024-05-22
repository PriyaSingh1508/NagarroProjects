// angular
import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// libs

import { MultilingualService } from './multilingual.service';
import { LangSwitcherComponent } from './lang-switcher.component';

// for AoT compilation
// export function translateLoaderFactory(http: Http) {
//   return new TranslateHttpLoader(http, `${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/i18n/`, '.json');
// }

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    // HttpClientModule,
    FormsModule,
    // MatSelectModule,
    // TranslateModule.forRoot([{
    //   provide: TranslateLoader,
    //   deps: [HttpClient],
    //   useClass: (CustomTranslateLoader)
    // }]),
  ],
  declarations: [LangSwitcherComponent],
  providers: [
    // TranslateService,
    MultilingualService,
  ],
  exports: [LangSwitcherComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class MultilingualModule {
  // optional usage
  // ideally we could use this to override TranslateModule, but it requires the static above at moment
  static forRoot(
    configuredProviders: Array<any>
  ): ModuleWithProviders<MultilingualModule> {
    return {
      ngModule: MultilingualModule,
      providers: configuredProviders,
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: MultilingualModule) {
    if (parentModule) {
      throw new Error(
        'MultilingualModule already loaded; Import in root module only.'
      );
    }
  }
}
