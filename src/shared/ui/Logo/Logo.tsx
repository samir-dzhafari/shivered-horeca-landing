import React from 'react';

import styles from './Logo.module.scss';

type LogoProps = {
	size?: 'md' | 'sm';
	theme?: 'light' | 'dark';
	layout?: 'inline' | 'stacked';
	className?: string;
};

export const Logo: React.FC<LogoProps> = ({size = 'md', theme = 'light', layout = 'inline', className}) => {
	const horecaSrc = theme === 'dark' ? '/assets/logo/horeca-dark.svg' : '/assets/logo/horeca.svg';

	return (
		<a
			className={[
				styles.logo,
				styles[size],
				layout === 'stacked' && styles.stacked,
				theme === 'dark' && styles.dark,
				className,
			]
				.filter(Boolean)
				.join(' ')}
			href="#"
		>
			<img
				alt="Sheverev"
				className={styles.logoSheverev}
				src="/assets/logo/sheverev.svg"
			/>
			<span className={styles.logoSlash}>/</span>
			<img
				alt="Horeca"
				className={styles.logoHoreca}
				src={horecaSrc}
			/>
		</a>
	);
};
