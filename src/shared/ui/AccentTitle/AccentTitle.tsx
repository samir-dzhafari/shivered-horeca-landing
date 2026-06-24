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
	const lines: AccentTitlePart[][] = [];
	let currentLine: AccentTitlePart[] = [];

	parts.forEach((part, index) => {
		if (index > 0 && part.breakBefore) {
			lines.push(currentLine);
			currentLine = [];
		}

		currentLine.push(part);
	});

	if (currentLine.length > 0) {
		lines.push(currentLine);
	}

	return (
		<Tag className={[styles.title, size === 'xl' && styles.titleXl, className].filter(Boolean).join(' ')}>
			{lines.map((lineParts, lineIndex) => (
				<span
					className={styles.line}
					key={lineIndex}
				>
					{lineParts.map((part, partIndex) =>
						part.accent ? (
							<span
								className={styles.accent}
								key={`${lineIndex}-${partIndex}`}
							>
								{part.text}
							</span>
						) : (
							<React.Fragment key={`${lineIndex}-${partIndex}`}>{part.text}</React.Fragment>
						),
					)}
				</span>
			))}
		</Tag>
	);
};
