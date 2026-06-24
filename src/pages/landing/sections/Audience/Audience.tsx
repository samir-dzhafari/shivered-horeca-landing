import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {NumberBadge} from 'shared/ui/NumberBadge';
import {PillTag} from 'shared/ui/PillTag';
import {SectionHeader} from 'shared/ui/SectionHeader';

import styles from './Audience.module.scss';

export const Audience: React.FC = () => {
	const {audience} = useLandingContent();

	return (
		<Section>
			<Container>
				<SectionHeader
					label={audience.label}
					labelVariant="accent"
					title={audience.title}
					width="audience"
				/>
				<blockquote className={styles.quote}>
					<p>{audience.quote}</p>
					<cite>{audience.quoteAuthor}</cite>
				</blockquote>

				<div className={styles.painPoints}>
					{audience.painPoints.map((item) => (
						<div
							className={styles.painPoint}
							key={item.num}
						>
							<NumberBadge
								value={item.num}
								variant="circle"
							/>
							<div>
								<h3 className={styles.painTitle}>{item.title}</h3>
								<p className={styles.painText}>{item.description}</p>
							</div>
						</div>
					))}
				</div>

				<div className={styles.tags}>
					{audience.tags.map((tag) => (
						<PillTag
							dotColor={tag.dotColor}
							key={tag.label}
						>
							{tag.label}
						</PillTag>
					))}
				</div>
			</Container>
		</Section>
	);
};
