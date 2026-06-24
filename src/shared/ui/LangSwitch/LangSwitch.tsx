import React from 'react';

import {useI18n} from 'shared/i18n';

import styles from './LangSwitch.module.scss';

export const LangSwitch: React.FC = () => {
	const {locale, setLocale} = useI18n();

	return (
		<div
			aria-label="Language"
			className={styles.switch}
			role="group"
		>
			<button
				aria-pressed={locale === 'ru'}
				className={locale === 'ru' ? styles.active : styles.inactive}
				type="button"
				onClick={() => setLocale('ru')}
			>
				RU
			</button>
			<button
				aria-pressed={locale === 'en'}
				className={locale === 'en' ? styles.active : styles.inactive}
				type="button"
				onClick={() => setLocale('en')}
			>
				EN
			</button>
		</div>
	);
};
