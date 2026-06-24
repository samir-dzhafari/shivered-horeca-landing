import React from 'react';

import styles from './FullBleedSection.module.scss';

type FullBleedSectionProps = {
	children: React.ReactNode;
	className?: string;
	id?: string;
	'data-testid'?: string;
};

export const FullBleedSection: React.FC<FullBleedSectionProps> = ({children, className, id, 'data-testid': testId}) => {
	return (
		<section
			className={[styles.section, className].filter(Boolean).join(' ')}
			data-testid={testId}
			id={id}
		>
			{children}
		</section>
	);
};
