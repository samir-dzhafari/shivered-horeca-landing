import React from 'react';

import styles from './LogoMarquee.module.scss';

export type LogoMarqueeItem = {
	alt: string;
	src: string;
};

type LogoMarqueeProps = {
	logos: readonly LogoMarqueeItem[];
};

const renderLogos = (logos: readonly LogoMarqueeItem[], keyPrefix: string) =>
	logos.map((logo) => (
		<img
			alt={logo.alt}
			className={styles.logo}
			height={40}
			key={`${keyPrefix}-${logo.src}`}
			loading="lazy"
			src={logo.src}
		/>
	));

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({logos}) => {
	return (
		<div className={styles.marquee}>
			<div className={styles.track}>
				<div className={styles.group}>{renderLogos(logos, 'a')}</div>
				<div
					aria-hidden="true"
					className={styles.group}
				>
					{renderLogos(logos, 'b')}
				</div>
			</div>
		</div>
	);
};
