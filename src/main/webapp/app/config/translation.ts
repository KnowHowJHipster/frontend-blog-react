import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('en');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  en: { name: 'English' },
  cs: { name: 'Český' },
  fr: { name: 'Français' },
  de: { name: 'Deutsch' },
  it: { name: 'Italiano' },
  ro: { name: 'Română' },
  ru: { name: 'Русский' },
  sk: { name: 'Slovenský' },
  sr: { name: 'Srpski' },
  ua: { name: 'Українська' },
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'en')));
};
