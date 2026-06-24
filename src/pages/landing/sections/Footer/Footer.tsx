import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Logo} from 'shared/ui/Logo';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
	const {ui} = useLandingContent();

	return (
		<footer
			className={styles.footer}
			data-testid="footer"
		>
			<div className={styles.inner}>
				<Logo
					size="sm"
					theme="dark"
				/>
				<p className={styles.text}>{ui.footer}</p>
			</div>
		</footer>
	);
};
