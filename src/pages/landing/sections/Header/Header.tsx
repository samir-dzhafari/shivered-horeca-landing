import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Button} from 'shared/ui/Button';
import {LangSwitch} from 'shared/ui/LangSwitch';
import {Logo} from 'shared/ui/Logo';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
	const {ui} = useLandingContent();

	return (
		<header
			className={styles.header}
			data-testid="header"
		>
			<div className={styles.inner}>
				<div className={styles.logoWrap}>
					<Logo layout="stacked" />
				</div>
				<div className={styles.actions}>
					<LangSwitch />
					<Button
						className={styles.cta}
						href="#register"
						variant="secondary"
					>
						<span className={styles.ctaFull}>{ui.bookSeat}</span>
						<span className={styles.ctaShort}>{ui.bookSeatShort}</span>
					</Button>
				</div>
			</div>
		</header>
	);
};
