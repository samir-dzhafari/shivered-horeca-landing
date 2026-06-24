import React from 'react';

import styles from './PillTag.module.scss';

type PillTagVariant = 'default' | 'compact' | 'fired' | 'plain';

type PillTagProps = {
	children: React.ReactNode;
	withDot?: boolean;
	variant?: PillTagVariant;
	dotColor?: string;
	className?: string;
};

export const PillTag: React.FC<PillTagProps> = ({children, withDot, variant = 'default', dotColor, className}) => {
	const showDot = withDot ?? variant === 'default';

	return (
		<span
			className={[styles.tag, styles[variant], className].filter(Boolean).join(' ')}
			style={dotColor ? ({'--pill-dot-color': dotColor} as React.CSSProperties) : undefined}
		>
			{showDot && <span className={styles.dot} />}
			{children}
		</span>
	);
};
