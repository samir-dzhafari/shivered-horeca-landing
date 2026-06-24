import React from 'react';

import styles from './Badge.module.scss';

type BadgeVariant = 'info' | 'dark';

type BadgeProps = {
	children: React.ReactNode;
	variant?: BadgeVariant;
	className?: string;
};

export const Badge: React.FC<BadgeProps> = ({children, variant = 'info', className}) => {
	return <span className={[styles.badge, styles[variant], className].filter(Boolean).join(' ')}>{children}</span>;
};
