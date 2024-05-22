export class AppSettings {
  private static restApiPath: string = window.location.origin;
  private static appConfig: any;
  public static IsConsoleLog = true;
  private static base: string;
  private static currentCulture: string;
  private static previousCulture: string;
  public static get Resources(): any[] {
    return [];
  }
  public static get SupportLanguages(): any[] {
    return this.appConfig.supportLanguages;
  }

  public static get Base(): string {
    return this.base;
  }

  public static get GetMenuDetails(): string {
    return this.restApiPath + '/assets/data/menu.json';
  }

  public static get DefaultLanguageCulture(): string {
    return this.appConfig ? this.appConfig.defaultLanguageCulture : 'en';
  }
  public static get Version(): string {
    return this.appConfig.version;
  }
  public static get LocalizationDirectoryPath(): string {
    return '/assets/i18n/';
  }
  public static get ConfigDataPath(): string {
    return '/assets/config.json';
  }

  public static get CurrentCulture(): string {
    return this.currentCulture;
  }
  public static get PreviousCulture(): string {
    return this.previousCulture;
  }

  public static setAppConfig(appConfigData: any) {
    this.restApiPath = window.location.origin;

    if (window.location.origin.includes('localhost')) {
      this.restApiPath = window.location.origin;
    }
  }
  public static setCurrentCulture(culture: string) {
    this.currentCulture = culture;
  }

  public static setPreviousCulture(culture: string) {
    this.previousCulture = culture;
  }

  public static setAppConfigForUnitTest(): any {
    this.appConfig = {};
  }
}
