// angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DCPHttpService } from '../../services';
import { AppSettings } from '../../../app.settings';
import { AuthService } from '../../../auth.service';

// service
@Injectable()
export class MultilingualService {
  private currentLang: string;
  constructor(
    // private translate:TranslateService,
    private http: DCPHttpService,
    private authService: AuthService
  ) {
    this.setDefaultLanguageStore();
  }

  // Set default language
  private setDefaultLanguageStore() {
    const language: string = AppSettings.DefaultLanguageCulture;
    this.currentLang = language;
    localStorage.removeItem(language);
    const previousLang = sessionStorage.getItem('currentLang');
    if (AppSettings.Resources && previousLang && previousLang === language) {
      const formattedResx: any = AppSettings.Resources;
      localStorage[language] = JSON.stringify(formattedResx);
      // this.translate.setDefaultLang(language);
      this.changeLanguage(language);
    } else {
      this.getResourcesByLocale(language).subscribe((response) => {
        if (response !== null) {
          const formattedResx: any = {};
          localStorage[language] = JSON.stringify(formattedResx);
          // this language will be used as a fallback when a translation isn't found in the current language
          // this.translate.setDefaultLang(language);
          this.changeLanguage(language);
        }
      });
    }

    sessionStorage.setItem('currentLang', language);
  }

  // Change language
  public changeLanguage(lang: string): void {
    if (lang) {
      // this.translate.use(lang);
      this.currentLang = lang;
      AppSettings.setCurrentCulture(lang);
      this.authService.selectedLanguageCodeChange.emit(lang);
    }
  }

  // Method use to get current language
  public getCurrentLang(): string {
    return this.currentLang;
  }

  // Method use to get resources by locale
  public getResourcesByLocale(language: string): Observable<any> {
    const url: string =
      AppSettings.LocalizationDirectoryPath + language + '.json';
    // if (AppSettings.IsUseLocalResourceFile) {
    //   url = AppSettings.LocalizationDirectoryPath + language + '.json';
    // } else {
    //   url = AppSettings.LocalizationServicePath + language;
    // }
    return this.http.get(url).pipe((response) => {
      return response;
    });
  }

  // // parse according to the object recived from the server
  // public extractResourceJSON(responseString: any[]) {
  //   let formattedResult: any[] = [];
  //   if (!AppSettings.IsUseLocalResourceFile) {
  //     if (responseString) {
  //       responseString.forEach(function (item: any, index: any, arr: any) {
  //         (<any>formattedResult)[item.ResourceKey] = item.ResourceValue;
  //       });
  //     }
  //   } else {
  //     formattedResult = responseString;
  //   }
  //   return formattedResult;
  // }
}
