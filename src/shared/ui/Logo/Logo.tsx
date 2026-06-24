import React from 'react';

import {HORECAGO_URL, SHEVEREV_URL} from 'shared/config/env';
import {assetUrl} from 'shared/lib/assetUrl';

import styles from './Logo.module.scss';

type LogoProps = {
	size?: 'md' | 'sm';
	theme?: 'light' | 'dark';
	layout?: 'inline' | 'stacked';
	className?: string;
};

export const Logo: React.FC<LogoProps> = ({size = 'md', theme = 'light', layout = 'inline', className}) => {
	const horecaSrc =
		theme === 'dark' ? assetUrl('assets/logo/horeca-dark.svg') : assetUrl('assets/logo/horeca.svg');

	return (
		<div
			className={[
				styles.logo,
				styles[size],
				layout === 'stacked' && styles.stacked,
				theme === 'dark' && styles.dark,
				className,
			]
				.filter(Boolean)
				.join(' ')}
		>
			<a
				className={styles.logoLink}
				href={SHEVEREV_URL}
				rel="noopener noreferrer"
				target="_blank"
			>
				<img
					alt="Sheverev"
					className={styles.logoSheverev}
					src={assetUrl('assets/logo/sheverev.svg')}
				/>
			</a>
			<span
				aria-hidden
				className={styles.logoSlash}
			>
				/
			</span>
			<a
				className={styles.logoLink}
				href={HORECAGO_URL}
				rel="noopener noreferrer"
				target="_blank"
			>
				<img
					alt="HorecaGO"
					className={styles.logoHoreca}
					src={horecaSrc}
				/>
			</a>
		</div>
	);
};
