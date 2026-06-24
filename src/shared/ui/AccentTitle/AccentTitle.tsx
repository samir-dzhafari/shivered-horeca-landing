import React from 'react';

import type {AccentTitlePart} from 'shared/i18n/types';

import styles from './AccentTitle.module.scss';

type AccentTitleProps = {
	parts: AccentTitlePart[];
	className?: string;
	as?: 'h1' | 'h2';
	size?: 'lg' | 'xl';
};

export const AccentTitle: React.FC<AccentTitleProps> = ({parts, className, as: Tag = 'h2', size = 'lg'}) => {
	return (
		<Tag className={[styles.title, size === 'xl' && styles.titleXl, className].filter(Boolean).join(' ')}>
			{parts.map((part, index) => (
				<React.Fragment key={`${part.text}-${index}`}>
					{part.breakBefore && <br />}
					{part.accent ? <span className={styles.accent}>{part.text}</span> : part.text}
				</React.Fragment>
			))}
		</Tag>
	);
};
