import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private translate: TranslateService) {
    // adding language to traslate arrat
    this.translate.addLangs(['en', 'fr', 'ar']);

    // set english as the default language
    this.translate.setDefaultLang('en');

    // get the language set by the browser
    const browserLang = this.translate.getBrowserLang();
    const regex = /en|fr|ar/;
    this.translate.use(browserLang.match(regex) ? browserLang : 'en');
    console.log('TRANSLATOR CONSTRUCT DONE');
  }

  getTranslation(): TranslateService {
    return this.translate;
  }

  setLanguage(language: string) {
    console.log('SET LANGUAGE ==> ', language);
    this.translate.use(language);
  }

}
