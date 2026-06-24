import React from 'react';

import {useLandingContent} from 'shared/i18n';
import {Container} from 'shared/layout/Container';
import {Section} from 'shared/layout/Section';
import {PillTag} from 'shared/ui/PillTag';
import {SectionHeader} from 'shared/ui/SectionHeader';

import styles from './Competitors.module.scss';

export const Competitors: React.FC = () => {
	const {competitors} = useLandingContent();

	return (
		<Section>
			<Container>
				<SectionHeader
					label={competitors.label}
					labelVariant="accent"
					subtitle={competitors.subtitle}
					titleParts={competitors.titleParts}
					titleSize="xl"
					width="competitors"
				/>

				<div className={styles.list}>
					{competitors.items.map((item) => (
						<div
							className={styles.item}
							key={item.title}
						>
							<div className={styles.itemHeader}>
								<h3 className={styles.itemTitle}>{item.title}</h3>
								<PillTag variant="fired">
									{item.firedLabel} <span aria-hidden>🔥</span>
								</PillTag>
							</div>
							<p className={styles.itemText}>{item.description}</p>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
};
