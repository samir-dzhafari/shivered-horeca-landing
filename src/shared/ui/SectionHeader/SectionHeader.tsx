import React from 'react';

import type {AccentTitlePart} from 'shared/i18n/types';
import {AccentTitle} from 'shared/ui/AccentTitle';

import styles from './SectionHeader.module.scss';

type SectionHeaderWidth =
	| 'competitors'
	| 'program'
	| 'format'
	| 'experts'
	| 'audience'
	| 'fit'
	| 'technology'
	| 'outcomes';

type SectionHeaderProps = {
	label: string;
	title?: React.ReactNode;
	titleParts?: AccentTitlePart[];
	subtitle?: React.ReactNode;
	align?: 'left' | 'center';
	width?: SectionHeaderWidth;
	labelVariant?: 'default' | 'accent';
	labelTransform?: 'uppercase' | 'none';
	titleSize?: 'lg' | 'xl';
	className?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
	label,
	title,
	titleParts,
	subtitle,
	align = 'left',
	width,
	labelVariant = 'default',
	labelTransform = 'uppercase',
	titleSize = 'lg',
	className,
}) => {
	const titleContent = titleParts ? (
		<AccentTitle
			parts={titleParts}
			size={titleSize}
		/>
	) : (
		title && <h2 className={styles.title}>{title}</h2>
	);

	return (
		<header
			className={[styles.header, styles[align], width && styles[`width_${width}`], className]
				.filter(Boolean)
				.join(' ')}
		>
			<span
				className={[
					styles.label,
					labelVariant === 'accent' && styles.labelAccent,
					labelTransform === 'none' && styles.labelNormal,
				]
					.filter(Boolean)
					.join(' ')}
			>
				{label}
			</span>
			{titleContent && <div className={styles.titleWrap}>{titleContent}</div>}
			{subtitle && <div className={styles.subtitle}>{subtitle}</div>}
		</header>
	);
};
