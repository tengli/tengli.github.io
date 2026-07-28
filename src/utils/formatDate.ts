import { ui, type Locale } from '../i18n/config';

export function formatDate(date: Date, locale: Locale = 'en'): string {
  return new Intl.DateTimeFormat(ui[locale].dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
