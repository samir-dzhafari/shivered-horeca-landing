import React from 'react';

import styles from './Section.module.scss';

type SectionProps = {
	children: React.ReactNode;
	className?: string;
	id?: string;
	'data-testid'?: string;
};

export const Section: React.FC<SectionProps> = ({children, className, id, 'data-testid': testId}) => {
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
