import React from 'react';

import styles from './ExpertCard.module.scss';

type ExpertCardProps = {
	name: string;
	subtitle: string;
	initials: string;
};

export const ExpertCard: React.FC<ExpertCardProps> = ({name, subtitle, initials}) => {
	return (
		<div className={styles.card}>
			<div className={styles.watermark}>{initials}</div>
			<div className={styles.footer}>
				<div className={styles.avatar}>{initials}</div>
				<div>
					<p className={styles.name}>{name}</p>
					<p className={styles.role}>{subtitle}</p>
				</div>
			</div>
		</div>
	);
};
