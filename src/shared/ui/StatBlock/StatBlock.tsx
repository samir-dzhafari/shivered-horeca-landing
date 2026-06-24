import React from 'react';

import styles from './StatBlock.module.scss';

type StatBlockProps = {
	value: string;
	label: string;
};

export const StatBlock: React.FC<StatBlockProps> = ({value, label}) => {
	return (
		<div className={styles.stat}>
			<span className={styles.value}>{value}</span>
			<span className={styles.label}>{label}</span>
		</div>
	);
};
