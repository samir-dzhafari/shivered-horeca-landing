import React from 'react';

import styles from './NumberBadge.module.scss';

type NumberBadgeVariant = 'circle' | 'index';

type NumberBadgeProps = {
	value: string;
	variant?: NumberBadgeVariant;
	className?: string;
};

export const NumberBadge: React.FC<NumberBadgeProps> = ({value, variant = 'circle', className}) => {
	return <span className={[styles.badge, styles[variant], className].filter(Boolean).join(' ')}>{value}</span>;
};
