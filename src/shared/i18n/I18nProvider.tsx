import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

import {en} from './locales/en';
import {ru} from './locales/ru';
import type {LandingContent, Locale} from './types';

const STORAGE_KEY = 'sheverev-horeca-locale';

const locales: Record<Locale, LandingContent> = {ru, en};

type I18nContextValue = {
	locale: Locale;
	content: LandingContent;
	setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const getInitialLocale = (): Locale => {
	if (typeof window === 'undefined') {
		return 'ru';
	}

	const saved = window.localStorage.getItem(STORAGE_KEY);

	return saved === 'en' ? 'en' : 'ru';
};

export const I18nProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
	const [locale, setLocale] = useState<Locale>(getInitialLocale);

	useEffect(() => {
		document.documentElement.lang = locale;
		window.localStorage.setItem(STORAGE_KEY, locale);
	}, [locale]);

	const value = useMemo<I18nContextValue>(
		() => ({
			locale,
			content: locales[locale],
			setLocale,
		}),
		[locale, setLocale],
	);

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
	const context = useContext(I18nContext);

	if (!context) {
		throw new Error('useI18n must be used within I18nProvider');
	}

	return context;
};

export const useLandingContent = (): LandingContent => useI18n().content;
