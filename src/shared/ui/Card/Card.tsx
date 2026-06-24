import React from 'react';

import styles from './Card.module.scss';

type CardVariant = 'default' | 'soft';

type CardProps = {
	children: React.ReactNode;
	className?: string;
	variant?: CardVariant;
};

export const Card: React.FC<CardProps> = ({children, className, variant = 'default'}) => {
	return (
		<div className={[styles.card, variant === 'soft' && styles.soft, className].filter(Boolean).join(' ')}>
			{children}
		</div>
	);
};
