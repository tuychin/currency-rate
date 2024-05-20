import { createTranslation } from 'i18n';

import { en } from './en';
import { ru } from './ru';

export const { useTranslation, t } = createTranslation<typeof ru>({ ru, en });
