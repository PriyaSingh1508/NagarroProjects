// libs
import { Component, OnInit } from '@angular/core';
import { MultilingualService } from './multilingual.service';
import { ILang } from './ilang';
import { SupportedLanguages } from './supported.languages';

@Component({
  selector: 'dcp-lang-switcher',
  templateUrl: 'lang-switcher.component.html',
  styleUrls: ['lang-switcher.component.scss'],
})

/**
 * This class represents the lazy loaded LangSwitcherComponent.
 */
export class LangSwitcherComponent implements OnInit {
  language: ILang;
  public selectedLanguageCode: string;
  public supportedLanguages: Array<ILang>;

  constructor(private multilingualService: MultilingualService) {}

  ngOnInit() {
    this.supportedLanguages = SupportedLanguages;
    console.log(this.supportedLanguages);
    this.selectedLanguageCode = 'en';
    if (
      this.multilingualService.getCurrentLang() &&
      this.multilingualService.getCurrentLang().toString().length > 0
    ) {
      this.selectedLanguageCode = this.multilingualService.getCurrentLang();
    } else {
      this.selectedLanguageCode = 'en';
    }
  }

  // method use to change the language culture
  public changeLang(selectedCulture: any) {
    let lang = this.supportedLanguages[0].code;
    if (
      selectedCulture &&
      selectedCulture.currentTarget &&
      selectedCulture.currentTarget.value
    ) {
      lang = selectedCulture.currentTarget.value;
      localStorage.removeItem(this.multilingualService.getCurrentLang());
      localStorage.removeItem(lang);
      // this.getLangugeByLocale(lang);
    }
  }

  // // Method use to get resorces by culture
  // private getLangugeByLocale(lang: string) {
  //   const previousLang = sessionStorage.getItem('currentLang');

  //   if (AppSettings.Resources && previousLang && previousLang === lang) {
  //     const formattedResx: any = AppSettings.Resources;
  //     localStorage[lang] = JSON.stringify(formattedResx);
  //     this.multilingualService.changeLanguage(lang);
  //   } else {
  //     this.multilingualService
  //       .getResourcesByLocale(lang)
  //       .subscribe((response) => {
  //         if (response !== null) {
  //           const formattedResx: any =
  //             this.multilingualService.extractResourceJSON(response);
  //           localStorage[lang] = JSON.stringify(formattedResx);
  //           this.multilingualService.changeLanguage(lang);
  //         }
  //       });
  //   }
  //   AppSettings.setCurrentCulture(this.multilingualService.getCurrentLang());
  //   sessionStorage.setItem('currentLang', lang);
  // }
}
